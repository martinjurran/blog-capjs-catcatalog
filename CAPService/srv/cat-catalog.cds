using catcat.domain as domainSchema from '../db/domainSchema';

@title: 'cat-catalog'
@Core.LongDescription: 'Provides all entities/services related to handling cat breeds.'
service CatCatalog{

  @readonly
  @description : 'Returns a list of all cat breeds'
  entity CatBreeds as projection on domainSchema.CatBreeds {
    *
  } 

}