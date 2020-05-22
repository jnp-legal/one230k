import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Repository } from '../repository.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repos: Repository[];

  constructor(private service: RepositoryService) { }

  ngOnInit(): void {
    this.service.get().subscribe(data => {
      this.repos = data.map(e => {
        return {
          id: e.payload.doc.id
        } as Repository;
      })
    });
  }

  create(repo: Repository) {
    this.service.create(repo);
  }

  update(repo: Repository) {
    this.service.update(repo);
  }

  delete(id: string) {
    this.service.delete(id);
  }
}
