namespace catcat.domain;

@description: 'Cat breeds with their properties'
entity CatBreeds {
  key name           : String @mandatory;
      originCountry  : String;
      coat           : String;
      pattern        : String;
}