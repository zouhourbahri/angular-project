import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IPosts } from 'src/app/core/modeles/posts';
import { PostsServiceService } from 'src/app/core/services/posts-service/posts-service.service';
import { Subject } from 'rxjs';
import { IDataStorage } from 'src/app/core/modeles/user';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  unsubscribeAll:Subject<void>=new Subject()
  postsListInitiale:IPosts[]=[]
  postsList:IPosts[]=[]
  formPost!:FormGroup
  progress:boolean=false
  deleteTitle:string=''
  confirmDialog!:MatDialogRef<any> //used so we can close only one opened dialog (confirmation dialog) and not all opened ones
  displayedColumnsLabels: Array<string> = ['N°', 'Title', 'Description'];/* header of the table */
  displayedColumns: Array<string> = ['N°','title', 'body','actions'];/* body */
    constructor(private postsService:PostsServiceService, private dialog:MatDialog,
       private formBuilder:FormBuilder,private cookieService:CookieService) { }
    @ViewChild('cancel')  cancel: any;
    mode:string=""
    modalTitle:string=""
    modalDescription:string=""
    selectedElementIndex:number=0
    /*  */
    dataStorage!:IDataStorage
    ngOnInit(): void {
      this.postsService.getListPosts().subscribe({
        next:res=>{
          console.log('res',res);
          // console.table(res);
          this.postsList=res
          this.postsListInitiale=res
        },
        error:()=>{
  
        }
      })
      /* get data from localStorage */
      let data =JSON.parse(JSON.stringify(localStorage.getItem('token')))
      this.dataStorage=JSON.parse(data)
      /* get data from cookies */
      let cookieData =JSON.parse(JSON.stringify(this.cookieService.get('token')))
      console.log('cookieData',JSON.parse(cookieData) );
    }
  
    ngAfterViewInit() {
      //runs automatically after ngOnInit and is always listening (detects changement)
      // this.dataSource.paginator = this.paginator;
    }
    //Filter List
    filterElement(event:any){
      console.log('event',event.target.value);
      this.postsList=this.postsListInitiale.filter((el:IPosts)=>{
        return el.title.toLowerCase().includes(event.target.value.toLowerCase()) //title (en miniscule) est ce qu'il contient ce qui est ecrit dans l'input (en miniscule)
      })
      console.log('tableau',this.postsList);
    }
  
    //Open modal add post
    openModalAjout(content:any){
      this.mode='Ajouter'
      this.formPost = this.createForm()
      this.dialog.open(content, {panelClass:'modal-sm', disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
    }
    createForm(data?:IPosts){
      return this.formBuilder.group({
        title: new FormControl( data && data.title? data.title : null, [Validators.required]),
        body: new FormControl(data && data.body? data.body : null, [Validators.required])
      })
    }
  
    updatePost(event:{element:IPosts,index:number}, content:any){
      this.mode='Modifier'
      this.selectedElementIndex =event.index
      this.formPost=this.createForm(event.element)
      this.dialog.open(content, {panelClass:'modal-sm', disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
    }
    close(){
      this.dialog.closeAll()
    }
    cancelModal(){
      if(this.formPost.touched && this.formPost.dirty){
        this.confirmDialog = this.dialog.open(this.cancel, {disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
      } else 
      this.close()
    }
    savePost(){
      if(this.formPost.valid){
        this.progress=true
        if(this.mode=='Ajouter'){
          //{...this.formPost.value} : trois points (spreading operator used with arrays and objects only)
        this.postsListInitiale.unshift({...this.formPost.value, userId: 1,id: this.postsListInitiale.length+1})
        } else {
          //updated selected element in the list by values from the formGroup
          this.postsListInitiale[this.selectedElementIndex]={...this.postsListInitiale[this.selectedElementIndex],...this.formPost.value}
        }
        this.postsList=this.postsListInitiale
        console.log('postsList',this.postsList)
        setTimeout(()=>{
          this.progress=false
          this.close()
      },2000)
      } else {
        //si le formulaire n'est pas valid, mark as dirty pour indiquer les champs à remplir ou bien les champs invalides
        this.formPost.markAllAsTouched()
        this.formPost.markAsDirty()
      }
    }
    cancelConfirm(event?:any){
      this.confirmDialog.close()
    }
      
      deletePost(element:{id:number,title:string}, deleteModal:any){
        this.selectedElementIndex=element.id
        this.deleteTitle=element.title.substring(0, 40);
        this.dialog.open(deleteModal,{disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
      }
      confirmDelete(){
        this.progress=true
        this.postsListInitiale = this.postsListInitiale.filter((el:IPosts)=>{
          return el.id!==this.selectedElementIndex
        })
        this.postsList = this.postsListInitiale
        this.close()
        setTimeout(()=>{
          this.progress=false
        },200)
      }
      getTitle (): FormControl{
        return this.formPost.get('title') as FormControl
      }
      getBody (): FormControl{
        return this.formPost.get('body') as FormControl
      }
  ngOnDestroy():void{
  
  }
}
