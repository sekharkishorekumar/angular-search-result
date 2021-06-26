import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';

describe('Integration::AppComponent', () => {
  it('should display original title', () => {
    const { comp, el, fixture, de } = setup();
    fixture.detectChanges();
    console.log(el, de);
  });

  it('should display a different test title', () => {
    const { comp, el, fixture } = setup();
    fixture.detectChanges();
  });
});

function setup() {
  TestBed.configureTestingModule({
    declarations: [AppComponent]
  });

  const fixture = TestBed.createComponent(AppComponent);

  const comp = fixture.componentInstance;

  const de = fixture.debugElement;
  const el = de.nativeElement;

  return { comp, fixture, de, el };
}
