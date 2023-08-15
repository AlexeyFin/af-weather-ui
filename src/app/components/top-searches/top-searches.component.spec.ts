import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TopSearchesComponent} from './top-searches.component';
import {CacheService} from '../../services/cache.service';
import {Store} from '@ngrx/store';
import {provideMockStore} from "@ngrx/store/testing";

describe('TopSearchesComponent', () => {
  let component: TopSearchesComponent;
  let fixture: ComponentFixture<TopSearchesComponent>;
  let cacheService: CacheService;
  let store: Store;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSearchesComponent],
      providers: [CacheService, Store,  provideMockStore({ initialState }),],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSearchesComponent);
    component = fixture.componentInstance;
    cacheService = TestBed.inject(CacheService);
    store = TestBed.inject(Store);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get top searches from cache service', () => {
    spyOn(cacheService, 'getTopSearches').and.returnValue([{key: 'New York', count: 2}, {key: 'London', count: 1}]);
    component.ngOnInit();
    expect(component.topSearcher).toEqual([{key: 'New York', count: 2}, {key: 'London', count: 1}]);
  });

  it('should limit top searches to specified limit', () => {
    spyOn(cacheService, 'getTopSearches').and.returnValue([
      {key: 'New York', count: 6},
      {key: 'London', count: 5},
      {key: 'Paris', count: 4},
      {key: 'Tokyo', count: 3},
      {key: 'Berlin', count: 2},
      {key: 'Madrid', count: 1},
    ]);
    component.ngOnInit();
    expect(component.topSearcher.length).toBe(5);
  });
});
