import { NgModule } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AlertDialogComponent } from "../alert-dialog/alert-dialog.component";

@NgModule()
export class AlertDialogClass {
    constructor(private dialog: MatDialog) {
    }
    openAlertDialog(alertMmessage: string) {
        const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: {
                message: alertMmessage,
                buttonText: {
                    cancel: 'Ok'
                }
            },
        });
    }
}
