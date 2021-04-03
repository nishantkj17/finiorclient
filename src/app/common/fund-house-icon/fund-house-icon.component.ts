import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-house-icon',
  templateUrl: './fund-house-icon.component.html',
  styleUrls: ['./fund-house-icon.component.css']
})
export class FundHouseIconComponent implements OnInit {
  @Input() fundName: string;
  dsp: string = 'assets/images/dsp.png';
  axis: string = 'assets/images/axis.png';
  tata: string = 'assets/images/tata.png';
  idfc: string = 'assets/images/idfc.png';
  mirae: string = 'assets/images/mirae.png';
  absl: string = 'assets/images/absl.png';
  icici: string = 'assets/images/icici.png';
  idbi: string = 'assets/images/idbi.png';
  canara: string = 'assets/images/canara.png';
  quant: string = 'assets/images/quant.png';
  nippon: string = 'assets/images/nippon.png';
  fundIcon: string;
  constructor() {

  }

  ngOnInit(): void {
    const findIcon = (icon) => {
      if (this.fundName.toLowerCase().includes(icon)) {
        return this.fundName;
      }
    };

    switch (this.fundName) {
      case findIcon('dsp'):
        this.fundIcon = this.dsp;
        break;
      case findIcon('axis'):
        this.fundIcon = this.axis;
        break;
      case findIcon('tata'):
        this.fundIcon = this.tata;
        break;
      case findIcon('idfc'):
        this.fundIcon = this.idfc;
        break;
      case findIcon('mirae'):
        this.fundIcon = this.mirae;
        break;
      case findIcon('aditya'):
        this.fundIcon = this.absl;
        break;
      case findIcon('icici'):
        this.fundIcon = this.icici;
        break;
      case findIcon('idbi'):
        this.fundIcon = this.idbi;
        break;
      case findIcon('canara'):
        this.fundIcon = this.canara;
        break;
      case findIcon('quant'):
        this.fundIcon = this.quant;
        break;
      case findIcon('nippon'):
        this.fundIcon = this.nippon;
        break;
      default:
        this.fundIcon = this.icici;
    };
  }
}
