import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons }
  from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-csv-preview',
  templateUrl: './csv-preview.component.html',
  styleUrls: ['./csv-preview.component.scss']
})
export class CsvPreviewComponent implements OnInit {
  closeResult = '';
  file: any;
  lines: any = []; //for headings
  linesR: any = [];
  isNeeded: boolean = false;
  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
  }
  // Hanle open modal event...
  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  close() {
    this.isNeeded = false;
    $("#file").val(''); //clear file data...
  }

  handleFileInput(event: any) {
    let files = event.target.files;
    console.log('files', files)
    if (files && files.length > 0) {
      this.isNeeded = true;
      let file: File = files.item(0);
      //File reader method
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r|\n|\r/);

        //Table Headings
        let headers = allTextLines[0].split(';');
        let data = headers;
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        //Pusd headings to array variable
        this.lines.push(tarr);


        // Table Rows
        let tarrR = [];

        let arrl = allTextLines.length;
        let rows = [];
        for (let i = 1; i < arrl; i++) {
          rows.push(allTextLines[i].split(';'));

        }

        for (let j = 0; j < arrl; j++) {

          tarrR.push(rows[j]);

        }
        //Push rows to array variable
        this.linesR.push(tarrR);
      }

    }
  }

}
