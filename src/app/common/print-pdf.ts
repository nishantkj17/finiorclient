import { NgModule } from "@angular/core";
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

@NgModule()
export class PrintPDF {
    constructor() {
    }

    public captureScreen(data: HTMLElement, filename:string)  
    {  
      //var data = document.getElementById('canvastoprint');  
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save(filename); // Generated PDF   
      });  
    }
}
