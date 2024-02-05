import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/validators/validators';
import { FormInputComponent } from 'src/app/shared/ui/form-input/form-input.component';
import { DatePickerComponent } from 'src/app/shared/ui/date-picker/date-picker.component';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-new-artist',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormInputComponent,
    DatePickerComponent,
    HeaderComponent,
  ],
  providers: [],
  templateUrl: './new-artist.component.html',
  styleUrl: './new-artist.component.scss'
})

export class NewArtistComponent {
  newArtistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.newArtistForm = this.formBuilder.group({
      artist: this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(3), CustomValidators.noOnlyWhiteSpace]],
        lastName: ['', [Validators.required, Validators.minLength(3), CustomValidators.noOnlyWhiteSpace]],
        dob: [null, [Validators.required, CustomValidators.age25Validator()]], //(min age: 25)
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z09.-]+\\.[a-z]{2,4}$')]],
        phoneNumber: ['', [Validators.required, Validators.pattern('^961[0-9]{8}$')]],  //(use regex expression to validate the Lebanese phone numbers)
        profilePicture: ['', [Validators.required]],
        stageName: [''],
        artistBackstory: [''],
        startingDate: [null],
      }),
      //Array of albums
      albums: this.formBuilder.group({
        albumsArray: this.formBuilder.array([this.newAlbumFormGroup()]),
      }),

    });
  }

  getformControlValue(group: string, name: string) { return this.newArtistForm.get(`${group}.${name}`); }

  newAlbumFormGroup(): FormGroup {
    return this.formBuilder.group({
      picture: [''],
      date: [null],
      //array of songs
      songs: this.formBuilder.group({
        songsArray: this.formBuilder.array([this.newSongFormGroup()]),
      }),
    });
  }
  get albumsArray(): FormArray {
    return this.newArtistForm.get('albums.albumsArray') as FormArray;
  }

  addAlbum(): void {
    this.albumsArray.push(this.newAlbumFormGroup());
  }

  removeAlbum(index: number): void {
    this.albumsArray.removeAt(index);
  }

  newSongFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      duration: [''],
    });
  }

  get songsArray(): FormArray {
    return this.newArtistForm.get('albums.albumsArray.songs.songsArray') as FormArray;
  }

  addSong(): void {
    if (this.songsArray) {
      this.songsArray.push(this.newSongFormGroup());}
  }

  removeSong(index: number): void {
    this.songsArray.removeAt(index);
  }
  onSubmit() {
    console.log(this.newArtistForm.value);
  }
}
