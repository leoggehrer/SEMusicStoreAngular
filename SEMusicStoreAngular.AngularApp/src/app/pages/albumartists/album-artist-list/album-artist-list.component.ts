import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { IAlbumArtist } from '@app/models/entities/views/i-album-artist';
import { AlbumArtistService } from '@app/services/http/entities/views/album-artist-service';
import { GenericViewListComponent } from '@app/components/base/generic-view-list.component';
import { AlbumService } from '@app/services/http/entities/album-service';
import { AlbumEditComponent } from '@app/components/album-edit/album-edit.component';

/* Ersetzen Sie hier 'IViewEntity' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IAlbumArtist {

}
/* Ersetzen Sie in Component 'item-view' durch den gewuenschten Namen (z.B.: genre-statistics) */
@Component({
    selector: 'app-album-artist-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './album-artist-list.component.html',
    styleUrl: './album-artist-list.component.css'
})
export class AlbumArtistListComponent extends GenericViewListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: AlbumArtistService,
        protected override messageBoxService: MessageBoxService,
        private albumService: AlbumService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'albumTitle.Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Album mit Artist';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return item.albumTitle;
    }

    /* 
    *  Hier koennen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => a.albumTitle.localeCompare(b.albumTitle));
    }


    protected override getEditComponent() {
        return AlbumEditComponent;
    }
}

