import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-medication-order',
  imports: [CommonModule, FormsModule],
  templateUrl: './medication-order.html',
  styleUrl: './medication-order.css',
})
export class MedicationOrder {

  // 🟢 Dummy Medicine List (Brand + Composition)
  // Bengali Comment: এখানে মেডিসিনের লিস্ট রাখা হয়েছে।
  medicines = [
    { brand: 'Paracetamol', composition: 'Acetaminophen 500mg', type: 'Tablet' },
    { brand: 'Calpol', composition: 'Paracetamol 250mg', type: 'Syrup' },
    { brand: 'Azithral', composition: 'Azithromycin 500mg', type: 'Tablet' },
    { brand: 'Metrogyl', composition: 'Metronidazole 400mg', type: 'Injection' },
    { brand: 'Allegra', composition: 'Fexofenadine 120mg', type: 'Capsule' },
    { brand: 'Betnovate', composition: 'Betamethasone Ointment', type: 'Ointment' }
  ];


  // user search input
  searchText: string = "";
  searchTextComposition: string = "";
  medicineType: string = "";
  doseFrequency: string = '';
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  units: string[] = [
    'mg',
    'ml',
    'g',
    'mcg',
    'tablet',
    'capsule',
    'drop',
    'puff'
  ];

  selectedValue: any = '';
  selectedDurationType: string = '';
  foodType: string = '';
  // filtered output list
  filteredMedicines: any[] = [];

  // 🔍 Search Function (Brand + Composition Search)
  // Bengali Comment: ব্যবহারকারী যেটা টাইপ করবে, সেটার সাথে মিল আছে এমন ব্র্যান্ড বা কম্পোজিশন দেখানো হবে
  searchMedicine() {
    const query = this.searchText.toLowerCase();

    this.filteredMedicines = this.medicines.filter(med =>
      med.brand.toLowerCase().includes(query) ||
      med.composition.toLowerCase().includes(query)
    );
  }

  // Clear input box
  clearSearch() {
    this.searchText = "";

    this.searchTextComposition = "";

    // Set medicine type dynamically
    this.medicineType = "";

    this.filteredMedicines = [];
  }
  selectMedicine(med: any) {

    console.log("Medicine : " + JSON.stringify(med));

    // নির্বাচিত brand নামটি search box এ বসবে
    this.searchText = med.brand;
    this.searchTextComposition = med.composition;

    // Set medicine type dynamically
    this.medicineType = med.type;

    this.filteredMedicines = [];

  }
}

