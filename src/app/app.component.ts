import { Component } from '@angular/core';
import { WidgetService} from './services/widget.service.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private widgetService: WidgetService) {}
  title = 'my-project';

  reorderItems(indexes) {
    console.log("start: " + indexes.startIndex);
    console.log("stop: " + indexes.endIndex);
    // call widget service function to update widget as per index
    // this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
    //   .subscribe(
    //     (data) => console.log(data)
    //   );
  }

}
