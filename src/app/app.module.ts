import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { QuillEditorModule } from 'ngx-quill-editor';

import{ UserService } from './services/user.service.client';
import{ WebsiteService } from './services/website.service.client';
import{ PageService } from './services/page.service.client';
import{ WidgetService } from './services/widget.service.client';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { SortableDirective } from './components/widget/widget-list/sortable.directive';
import { SafePipe } from './components/widget/widget-list/safe-pipe.pipe';
import { OrderByPipe } from './components/widget/widget-list/order-by-pipe.pipe';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { FlickrService } from './services/flickr.service.client';
import { SharedService } from './services/shared.service';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    PageNewComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    SortableDirective,
    OrderByPipe,
    SafePipe,
    WidgetHtmlComponent,
    WidgetTextComponent,
    FlickrImageSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing,
    QuillEditorModule
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, FlickrService, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
