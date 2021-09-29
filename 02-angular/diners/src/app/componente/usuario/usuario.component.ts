import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nombre: string = 'Adrian';

  public imagen: string = "https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg";

  public botonEnTexto:string = '<h1>Empieza</h1>'
  + '<button>Hola</button><script>console.log("hola");alert("HOLA");</script>';

  // import { SafeHtml } from '@angular/platform-browser';
  public botonSanitizado: SafeHtml = '';


  public videoInseguro: string = 'https://www.youtube.com/embed/yEIBBS7TJmg';

  // import { SafeResourceUrl } from '@angular/platform-browser';
  public videoSeguro: SafeResourceUrl = '';

  constructor(
    // import { DomSanitizer } from '@angular/platform-browser';
    public sanitizer: DomSanitizer
  ) {
    this.botonSanitizado = this.sanitizer.bypassSecurityTrustHtml(this.botonEnTexto);
    
    this.videoSeguro = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoInseguro
      );
   }

  ngOnInit(): void {
  }

}
