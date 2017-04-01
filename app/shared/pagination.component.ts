import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {OnChanges} from 'angular2/core';

@Component({
    selector:'pagination',
    template:`

        <div *ngIf="items.length > pageSize" class="container">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li [class.disabled]="currentPage==1" >
                    <a (click)="previous()" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li *ngFor="#page of pages;"
                    [class.active]="currentPage==page"
                    ><a (click)="changePage(page)">{{page}}</a></li>
                    
                    <li [class.disabled]="currentPage >=length/pageSize">
                    <a (click)="next()" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    
    `
})
export class PaginationComponent implements OnChanges{
    @Input() items = [];
    currentPage = 1;
    @Input() pageSize = 10;
    length;;
     
     
     @Output() change = new EventEmitter;
     pages: any[];
     ngOnChanges(){
         this.length = this.items.length;
         this.currentPage = 1;
         var pagesCount = this.items.length/this.pageSize;
         this.pages = [];
         for(var i=1;i<=pagesCount;i++){
             this.pages.push(i);
         }
     }
    changePage(p){
        this.currentPage = p;
        this.change.emit({page:this.currentPage});
    }
    next(){
        if(this.currentPage*this.pageSize >= this.length)
            return;
        this.currentPage ++;
        this.change.emit({page:this.currentPage});
    }
    previous(){
        if(this.currentPage==1)
            return;
        this.currentPage --;
        this.change.emit({page:this.currentPage});
    }
}