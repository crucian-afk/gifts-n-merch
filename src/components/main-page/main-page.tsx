import {Products} from '../../types/mock-types';
import './promo-products.css';
import {
  SectionContactUs,
  SectionMerch, SectionPartners,
  SectionPopular,
  SectionPromo,
  SectionSets
} from '../main-page-units/main-page-units';

type promoProps = {
  goods: Products;
  type: string;
}

export default function MainPage({goods, type = 'promo'}: promoProps): JSX.Element {

  return (
    <>
      <SectionPromo />
      <SectionPopular goods={goods} type={type} />
      <SectionSets />
      <SectionMerch />
      <SectionContactUs />
      <SectionPartners />
    </>
  );
}
