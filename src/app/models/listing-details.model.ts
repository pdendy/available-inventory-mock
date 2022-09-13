export class ListingDetails {
    description: string;
    material: string;
    dimensionsDescription: string;
    weightDescription: string;
    releaseDate: Date;
    safetyInformation: string;
    warrantyInformation: string;
  
    constructor(
      description: string,
      material: string,
      dimensionsDescription: string,
      weightDescription: string,
      releaseDate: Date,
      safetyInformation: string,
      warrantyInformation: string
    ) {
      this.description = description;
      this.material = material;
      this.dimensionsDescription = dimensionsDescription;
      this.weightDescription = weightDescription;
      this.releaseDate = releaseDate;
      this.safetyInformation = safetyInformation;
      this.warrantyInformation = warrantyInformation;
    }
  }
  