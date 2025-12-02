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
    { brand: 'Paracetamol', composition: 'Acetaminophen 500mg' },
    { brand: 'Calpol', composition: 'Paracetamol 250mg' },
    { brand: 'Azithral', composition: 'Azithromycin 500mg' },
    { brand: 'Metrogyl', composition: 'Metronidazole 400mg' },
    { brand: 'Allegra', composition: 'Fexofenadine 120mg' },
  ];

  // user search input
  searchText: string = "";

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
    this.filteredMedicines = [];
  }
}

