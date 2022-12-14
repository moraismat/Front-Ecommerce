import { TestBed } from '@angular/core/testing';
import { CategoriaService } from './categoria.service';

describe('categoriaService', () => {
  let categoriaService: CategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    categoriaService = TestBed.inject(CategoriaService);
  });

  it('should be created', () => {
    expect(categoriaService).toBeTruthy();
  });
});
