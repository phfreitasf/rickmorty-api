import { Component, OnInit } from '@angular/core';
import { ListCharactersService } from 'src/app/services/list-characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Array<any> = []
  filterChar: string = ''
  info: Array<any> = []
  pages: Array<number> = []
  filtered: boolean = false
  href: string = `https://rickandmortyapi.com/api/character/?page=`


  constructor(private listCharactersService: ListCharactersService) { }

  ngOnInit(): void {
    this.getChars()
  }

  getChars() {
    this.listCharactersService.getList().subscribe(result => {
      this.characters = result.results
      this.info = result.info.next
      this.pagesToArray(result.info.pages)
      this.filtered = false
      this.filterChar = ''
    })
  }

  searchChar(name: string) {
    if(!name || name.split(' ').join('') == '') return
    this.listCharactersService.searchList(name).subscribe(result => {
      this.characters = result.results
      this.pagesToArray(result.info.pages)
      this.filtered = true
    })
  }

  
  pagesToArray(totalPage: number) {
    this.pages = []
    for (let i = 1; i <= totalPage; i++) {
      this.pages.push(i)
    }
  }
  
  navPagination (i:number) {
    this.href = `https://rickandmortyapi.com/api/character/?page=`
    if(this.filtered) {
      this.href = `${this.href}${i}&name=${this.filterChar}`
      console.log('filtered on ' + this.href)
    }
    else {
      this.href = `${this.href}${i}`
      console.log('filtered off '  + this.href)
    }
    this.currentPage(this.href)
  }
  
  currentPage (href:string) {
    this.listCharactersService.pagNavigation(href).subscribe(result => {
      this.characters = result.results
    })
  }
}
