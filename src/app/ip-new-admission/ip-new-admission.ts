import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicationOrder } from '../medication-order/medication-order';

@Component({
  selector: 'app-ip-new-admission',
  standalone: true,
  imports: [CommonModule, FormsModule, MedicationOrder],
  templateUrl: './ip-new-admission.html',
  styleUrl: './ip-new-admission.css',
})
export class IpNewAdmissionComponent {

  activeTab: string = 'Admission';  // default tab

  setActive(tab: string) {
    this.activeTab = tab;
  }
  showInsuranceDetails = false;

  toggleInsurance(event: any) {
    this.showInsuranceDetails = event.target.checked;
  }

  selectedPatientId: string = '500454'; // বা ডাইনামিক patient ID

  showTariffModal = false;

  tariffData = [
    { si: 1, item: 'Room Charges', price: 500 },
    { si: 2, item: 'Duty Doctor Charges', price: 400 },
    { si: 3, item: 'Nursing Charges', price: 200 },
    { si: 3, item: 'Nursing Charges', price: 200 }

  ];

  get totalAmount() {
    return this.tariffData.reduce((sum, row) => sum + row.price, 0);
  }

  openTariffModal() {
    this.showTariffModal = true;
  }

  closeTariffModal() {
    this.showTariffModal = false;
  }

  bedRows = [
    {
      bedType: '',
      bedNumber: '',
      checkIn: '',
      checkOut: '',
      currentRoom: ''
    }
  ];

  addRow() {
    this.bedRows.push({
      bedType: '',
      bedNumber: '',
      checkIn: '',
      checkOut: '',
      currentRoom: ''
    });
  }

  tariffs = [
    { name: 'Room Charges', price: 500 },
    { name: 'Duty Doctor Charges', price: 400 },
    { name: 'Nursing Charges', price: 200 },
  ];

  total = 0;
  ngOnInit() {
    this.calculateTotal();
  }

  removeRow(index: number) {
    this.bedRows.splice(index, 1);
    this.tariffs.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.tariffs.reduce((sum, item) => sum + item.price, 0);
  }
  // inside your component class
  advanceAmount = 10000; // initial shown advance amount (number)
  balance = 1000;        // shown balance (if you want it dynamic)

  // handler when user clicks "+Advance"
  onAddAdvance() {
    // example: open modal, add amount or increase value
    // here we just increment as a sample; replace with real logic
    const add = 500; // sample increment
    this.advanceAmount += add;
    this.balance = Math.max(0, this.balance - add);
    // TODO: open real modal / form to accept amount & update from server
  }

  // handler for "+From Reservation"
  onFromReservation() {
    // sample behavior — replace with actual reservation flow
    const fromRes = 200; // sample amount applied from reservation
    this.advanceAmount += fromRes;
    this.balance = Math.max(0, this.balance - fromRes);
    // TODO: implement reservation selection & apply payment logic
  }
  advance = 10000;

  addAdvance() {
    // your logic to add advance (open modal / update values)
    console.log('Add Advance clicked');
  }

  fromReservation() {
    // your logic to pull from reservation
    console.log('From Reservation clicked');
  }


  // Default active tab
  activeTabIP: string = 'Admission Instructions';

  // Set tab
  setActiveIP(tab: string) {
    this.activeTabIP = tab;
  }

  // List of all tabs
  tabs: string[] = [
    'Admission Instructions',
    'Doctors Activity',
    'Nursing Activity',
    'Indents',
    'Lab Results',
    'Prescriptions',
    'Discharge Notes',
    'Clearance',
    'Forms',
    'Attachments',
    'OP Records',
    'OT Notes',
    'Summary & Print'
  ];
}
