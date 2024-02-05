import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from 'src/app/shared/ui/form-input/form-input.component';

@Component({
  selector: 'app-song-modal',
  standalone: true, // Remove if part of a module
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormInputComponent,
  ],
  providers: [],
  templateUrl: './song-modal.component.html',
  styleUrls: ['./song-modal.component.scss'],
})
export class SongModalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter();
  @Input() currentAlbumIndex: number = 0;
  @Output() saveSongs = new EventEmitter<{ name: string; duration: string }[]>();
  @Input() modalForm!: FormGroup; // Receive form from parent

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Check if modalForm is provided, create default if not
    if (!this.modalForm) {
      this.modalForm = this.createDefaultFormGroup();
    }
  }
  
  private createDefaultFormGroup(): FormGroup {
    return this.formBuilder.group({
      songsArray: this.formBuilder.array([this.newSongFormGroup()]),
    });
  }
  addSong(): void {
    const newSongGroup = this.newSongFormGroup();
    this.getSongsArray().push(newSongGroup); // Access songsArray through modalForm
    console.log('Form value after adding song:', this.modalForm.value);
  }

  removeSong(index: number): void {
    this.getSongsArray().removeAt(index); // Access songsArray through modalForm
  }

  newSongFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      duration: [''],
    });
  }

  onSave(): void {
    const songsData: { name: string; duration: string }[] = this.getSongsArray().value;
    this.saveSongs.emit(songsData);
    this.closeModal.emit();
  }

  close(): void {
    // Close the modal for the current album
    this.isOpen = false;
  }

  getSongsArray(): FormArray {
    // Retrieve songsArray from modalForm
    return this.modalForm.get('songsArray') as FormArray;
  }
}