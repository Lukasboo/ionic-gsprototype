import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the AssembliesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assemblies',
  templateUrl: 'assemblies.html'
})
export class AssembliesPage {

  actualDate: number;
  assemblies: Array<any>;
  assemblie: any;
  years: Array<any>;
  public year: number;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.year = 2017;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssembliesPage');
    console.log(this.formatDate(new Date())); 
    this.assemblieFakeData();
    /*this.assemblies = [ 
      {"assemblieNumber": "138", "month": "0", "embutido": "30%", "fixo": "10%", "minimo": "2%", "maximo": "99%", "bem": "Imóvel", "prazo": "002", "vencimento": "25/08/2018", "assembleia": "13/12/2016", "loteria": "01/01/2017"},
      {"assemblieNumber": "139", "month": "1", "embutido": "60%", "fixo": "11%", "minimo": "1%", "maximo": "99%", "bem": "Imóvel", "prazo": "022", "vencimento": "26/04/2018", "assembleia": "14/11/2016", "loteria": "02/02/2017"},
      {"assemblieNumber": "140", "month": "2", "embutido": "90%", "fixo": "33%", "minimo": "1%", "maximo": "99%", "bem": "Imóvel", "prazo": "030", "vencimento": "27/03/2018", "assembleia": "15/10/2016", "loteria": "03/03/2017"},
      {"assemblieNumber": "141", "month": "3", "embutido": "10%", "fixo": "59%", "minimo": "10%", "maximo": "98%", "bem": "Imóvel", "prazo": "001", "vencimento": "28/01/2018", "assembleia": "16/09/2016", "loteria": "04/04/2017"},
      {"assemblieNumber": "142", "month": "4", "embutido": "15%", "fixo": "58%", "minimo": "16%", "maximo": "80%", "bem": "Imóvel", "prazo": "009", "vencimento": "29/02/2018", "assembleia": "17/08/2016", "loteria": "05/05/2017"},
      {"assemblieNumber": "143", "month": "5", "embutido": "32%", "fixo": "52%", "minimo": "17%", "maximo": "22%", "bem": "Imóvel", "prazo": "090", "vencimento": "30/01/2018", "assembleia": "18/07/2016", "loteria": "06/06/2017"},
      {"assemblieNumber": "144", "month": "6", "embutido": "59%", "fixo": "22%", "minimo": "23%", "maximo": "87%", "bem": "Imóvel", "prazo": "100", "vencimento": "31/02/2018", "assembleia": "19/06/2016", "loteria": "07/07/2017"},
      {"assemblieNumber": "145", "month": "7", "embutido": "67%", "fixo": "37%", "minimo": "2%", "maximo": "15%", "bem": "Imóvel", "prazo": "005", "vencimento": "02/03/2018", "assembleia": "20/05/2016", "loteria": "08/08/2017"},
      {"assemblieNumber": "146", "month": "8", "embutido": "48%", "fixo": "88%", "minimo": "5%", "maximo": "29%", "bem": "Imóvel", "prazo": "007", "vencimento": "07/05/2018", "assembleia": "21/04/2016", "loteria": "09/09/2017"},
      {"assemblieNumber": "147", "month": "9", "embutido": "25%", "fixo": "99%", "minimo": "8%", "maximo": "12%", "bem": "Imóvel", "prazo": "007", "vencimento": "09/07/2018", "assembleia": "22/03/2016", "loteria": "10/10/2017"},
      {"assemblieNumber": "148", "month": "10", "embutido": "5%", "fixo": "12%", "minimo": "9%", "maximo": "19%", "bem": "Imóvel", "prazo": "007", "vencimento": "11/11/2018", "assembleia": "23/02/2016", "loteria": "11/11/2017"},
      {"assemblieNumber": "149", "month": "11", "embutido": "1%", "fixo": "100%", "minimo": "10%", "maximo": "100%", "bem": "Imóvel", "prazo": "001", "vencimento": "10/04/2018", "assembleia": "24/01/2016", "loteria": "12/12/2017"}
    ]*/ 
    this.assemblie = this.assemblies[0];
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

  getActualDate(){
    var now = new Date();
    console.log(now);
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    console.log(document.getElementsByClassName('ion-col-assemblie'));
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    console.log(monthIndex + 1);
    this.actualDate = monthIndex;
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
  getAssembliesData(month){
    this.assemblie = this.assemblies[month];
    console.log(this.assemblie);
    return this.assemblies[month];
  }  

  changeYear(counter){
    if(counter==1) {
      this.year = this.year + 1; 
    } else {
      this.year = this.year - 1; 
    }

    if(this.year != 2017){
      this.assemblie = "";
    } else {
      this.assemblieFakeData();
      this.getAssembliesData(8) 
    }

  }    

  assemblieFakeData(){
    this.assemblies = [ 
      {"assemblieNumber": "138", "month": "0", "embutido": "30%", "fixo": "10%", "minimo": "2%", "maximo": "99%", "bem": "Imóvel", "prazo": "002", "vencimento": "25/08/2018", "assembleia": "13/12/2016", "loteria": "01/01/2017"},
      {"assemblieNumber": "139", "month": "1", "embutido": "60%", "fixo": "11%", "minimo": "1%", "maximo": "99%", "bem": "Imóvel", "prazo": "022", "vencimento": "26/04/2018", "assembleia": "14/11/2016", "loteria": "02/02/2017"},
      {"assemblieNumber": "140", "month": "2", "embutido": "90%", "fixo": "33%", "minimo": "1%", "maximo": "99%", "bem": "Imóvel", "prazo": "030", "vencimento": "27/03/2018", "assembleia": "15/10/2016", "loteria": "03/03/2017"},
      {"assemblieNumber": "141", "month": "3", "embutido": "10%", "fixo": "59%", "minimo": "10%", "maximo": "98%", "bem": "Imóvel", "prazo": "001", "vencimento": "28/01/2018", "assembleia": "16/09/2016", "loteria": "04/04/2017"},
      {"assemblieNumber": "142", "month": "4", "embutido": "15%", "fixo": "58%", "minimo": "16%", "maximo": "80%", "bem": "Imóvel", "prazo": "009", "vencimento": "29/02/2018", "assembleia": "17/08/2016", "loteria": "05/05/2017"},
      {"assemblieNumber": "143", "month": "5", "embutido": "32%", "fixo": "52%", "minimo": "17%", "maximo": "22%", "bem": "Imóvel", "prazo": "090", "vencimento": "30/01/2018", "assembleia": "18/07/2016", "loteria": "06/06/2017"},
      {"assemblieNumber": "144", "month": "6", "embutido": "59%", "fixo": "22%", "minimo": "23%", "maximo": "87%", "bem": "Imóvel", "prazo": "100", "vencimento": "31/02/2018", "assembleia": "19/06/2016", "loteria": "07/07/2017"},
      {"assemblieNumber": "145", "month": "7", "embutido": "67%", "fixo": "37%", "minimo": "2%", "maximo": "15%", "bem": "Imóvel", "prazo": "005", "vencimento": "02/03/2018", "assembleia": "20/05/2016", "loteria": "08/08/2017"},
      {"assemblieNumber": "146", "month": "8", "embutido": "48%", "fixo": "88%", "minimo": "5%", "maximo": "29%", "bem": "Imóvel", "prazo": "007", "vencimento": "07/05/2018", "assembleia": "21/04/2016", "loteria": "09/09/2017"},
      {"assemblieNumber": "147", "month": "9", "embutido": "25%", "fixo": "99%", "minimo": "8%", "maximo": "12%", "bem": "Imóvel", "prazo": "007", "vencimento": "09/07/2018", "assembleia": "22/03/2016", "loteria": "10/10/2017"},
      {"assemblieNumber": "148", "month": "10", "embutido": "5%", "fixo": "12%", "minimo": "9%", "maximo": "19%", "bem": "Imóvel", "prazo": "007", "vencimento": "11/11/2018", "assembleia": "23/02/2016", "loteria": "11/11/2017"},
      {"assemblieNumber": "149", "month": "11", "embutido": "1%", "fixo": "100%", "minimo": "10%", "maximo": "100%", "bem": "Imóvel", "prazo": "001", "vencimento": "10/04/2018", "assembleia": "24/01/2016", "loteria": "12/12/2017"}
    ] 
  }

}
