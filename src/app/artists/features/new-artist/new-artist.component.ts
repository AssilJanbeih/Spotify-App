import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/core/validators/validators';
import { FormInputComponent } from 'src/app/shared/ui/form-input/form-input.component';
import { DatePickerComponent } from 'src/app/shared/ui/date-picker/date-picker.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { SongModalComponent } from './song-modal/song-modal.component';

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
    SongModalComponent,
  ],
  providers: [],
  templateUrl: './new-artist.component.html',
  styleUrl: './new-artist.component.scss'
})

export class NewArtistComponent {
  @ViewChild(SongModalComponent) songModalComponent!: SongModalComponent;

  newArtistForm!: FormGroup;

  isSongModalOpen: boolean[] = [];
  currentAlbumIndex: number | null = null;

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
      songs: this.newSongFormGroup()
      // this.formBuilder.group({//array of songs
        // songsArray: this.formBuilder.array([this.newSongFormGroup()]),
      // }),
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
    return this.newArtistForm.get('albums.albumsArray')!.get('songs.songsArray') as FormArray;
  }

  addSong(): void {
    if (this.songsArray) {
      this.songsArray.push(this.newSongFormGroup());
    }
  }

  removeSong(albumIndex: number, songIndex: number): void {
    const songsArray = this.albumsArray.at(albumIndex).get('songs.songsArray') as FormArray;
    songsArray.removeAt(songIndex);
  }

  onFileSelected(event: any, albumIndex: number): void {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const albumFormGroup = this.albumsArray.at(albumIndex) as FormGroup;
        albumFormGroup.get('picture')?.setValue(file.name);
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }
  }

  openSongModal(albumIndex: number): void {
    this.currentAlbumIndex = albumIndex;
    this.isSongModalOpen[albumIndex] = true;

    // Retrieve the form group for the album's songs
    const albumSongsFormGroup = this.getAlbumSongsFormGroup(albumIndex);

    // Pass the entire form group to the modal component
    this.songModalComponent.modalForm = albumSongsFormGroup;
  }
  getAlbumSongsFormGroup(index: number): FormGroup {
    const albumControl = this.albumsArray.controls[index] as FormGroup;

    // Check if 'songs' group exists, if not, create it
    if (!albumControl.get('songs')) {
      albumControl.addControl('songs', this.formBuilder.group({
        songsArray: this.formBuilder.array([this.newSongFormGroup()]),
      }));
    }

    return albumControl.get('songs') as FormGroup;
  }

  closeSongModal(): void {
    if (this.currentAlbumIndex) {
      this.isSongModalOpen[this.currentAlbumIndex] = false;
    }
  }

  saveSongs(songsData: { name: string; duration: string }[]): void {
    // Handle the saved songs data here
    console.log('Saved Songs Data:', songsData);

    // Push the new album with songs data to the albums array
    if (this.currentAlbumIndex) {
      const currentAlbum = this.albumsArray.at(this.currentAlbumIndex) as FormGroup;
      currentAlbum.get('songs')?.get('songsArray')?.setValue(songsData);
    }
  }

  onSubmit() {
    console.log(this.newArtistForm.value);
  }
}
