import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class PosteCreateComponent {
    title: string;
    content: string;
    
    onAddPost() {
        console.log('clicked');
    }
}