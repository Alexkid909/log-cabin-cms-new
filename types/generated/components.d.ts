import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButtonFunction extends Schema.Component {
  collectionName: 'components_common_button_functions';
  info: {
    displayName: 'Button (Function)';
    description: '';
  };
  attributes: {
    functionName: Attribute.Enumeration<['toggle-calendar-active']> &
      Attribute.Required;
    theme: Attribute.Component<'common.button-theme'>;
    buttonText: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 25;
      }>;
  };
}

export interface CommonButtonLink extends Schema.Component {
  collectionName: 'components_common_button_links';
  info: {
    displayName: 'Button (Link)';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    theme: Attribute.Component<'common.button-theme'>;
  };
}

export interface CommonButtonTheme extends Schema.Component {
  collectionName: 'components_common_button_themes';
  info: {
    displayName: 'Button Theme';
    description: '';
  };
  attributes: {
    themeName: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface CommonCloudinaryImage extends Schema.Component {
  collectionName: 'components_common_cloudinary_images';
  info: {
    displayName: 'Cloudinary Image';
    description: '';
  };
  attributes: {
    cloudinaryId: Attribute.String & Attribute.Required;
    width: Attribute.BigInteger & Attribute.Required;
    cssClasses: Attribute.String;
    transformations: Attribute.Component<
      'image.cloudinary-image-transformation',
      true
    >;
  };
}

export interface CommonComponentHeader extends Schema.Component {
  collectionName: 'components_common_component_header';
  info: {
    displayName: 'Component Header';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface CommonFeatureComponent extends Schema.Component {
  collectionName: 'components_common_feature_components';
  info: {
    displayName: 'Feature Component';
  };
  attributes: {
    feature: Attribute.Relation<
      'common.feature-component',
      'oneToOne',
      'api::feature.feature'
    >;
  };
}

export interface CommonImageTile extends Schema.Component {
  collectionName: 'components_common_image_tiles';
  info: {
    displayName: 'Cloudinary Image Tile';
    description: '';
  };
  attributes: {
    cloudinaryId: Attribute.String & Attribute.Required;
    showImageWatermark: Attribute.Boolean & Attribute.DefaultTo<false>;
    overlayEffect: Attribute.Enumeration<['overlay-gradient-center-y']>;
    transformations: Attribute.Component<
      'image.cloudinary-image-transformation',
      true
    >;
    landscapeStyles: Attribute.Component<'common.key-value-pair', true>;
    portraitStyles: Attribute.Component<'common.key-value-pair', true>;
  };
}

export interface CommonKeyValuePair extends Schema.Component {
  collectionName: 'components_common_key_value_pairs';
  info: {
    displayName: 'Key Value Pair';
    description: '';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface CommonNavPage extends Schema.Component {
  collectionName: 'components_common_nav_pages';
  info: {
    displayName: 'Nav Page';
    description: '';
  };
  attributes: {
    page: Attribute.Relation<'common.nav-page', 'oneToOne', 'api::page.page'>;
  };
}

export interface CommonOrientationStyle extends Schema.Component {
  collectionName: 'components_common_orientation_styles';
  info: {
    displayName: 'Orientation Style';
  };
  attributes: {
    style: Attribute.Component<'common.key-value-pair', true> &
      Attribute.Required;
    orientation: Attribute.Enumeration<['landscape', 'portrait']> &
      Attribute.DefaultTo<'landscape'>;
  };
}

export interface CommonQAndA extends Schema.Component {
  collectionName: 'components_common_q_and_as';
  info: {
    displayName: 'Question and Answer Component';
    description: '';
  };
  attributes: {
    questionAndAnswer: Attribute.Relation<
      'common.q-and-a',
      'oneToOne',
      'api::q-and-a.q-and-a'
    >;
  };
}

export interface CommonSectionTheme extends Schema.Component {
  collectionName: 'components_common_section_themes';
  info: {
    displayName: 'Section Theme';
    description: '';
  };
  attributes: {
    themeName: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface CommonTextComponent extends Schema.Component {
  collectionName: 'components_common_text_components';
  info: {
    displayName: 'Text Component';
  };
  attributes: {
    text: Attribute.RichText;
    cssClasses: Attribute.String;
  };
}

export interface ImageCloudinaryImageTransformation extends Schema.Component {
  collectionName: 'components_image_cloudinary_image_transformations';
  info: {
    displayName: 'Cloudinary Image Transformation';
  };
  attributes: {
    crop: Attribute.String;
    width: Attribute.Float;
    height: Attribute.Float;
    offsetY: Attribute.Float;
    offsetX: Attribute.Float;
    gravity: Attribute.String;
    overlay: Attribute.String;
    opacity: Attribute.BigInteger;
    flags: Attribute.String;
    aspectRatio: Attribute.Decimal;
  };
}

export interface SectionBannerContentSection extends Schema.Component {
  collectionName: 'components_section_banner_content_sections';
  info: {
    displayName: 'Banner Content Section';
    description: '';
  };
  attributes: {
    banner: Attribute.Relation<
      'section.banner-content-section',
      'oneToOne',
      'api::banner.banner'
    >;
  };
}

export interface SectionBannerSection extends Schema.Component {
  collectionName: 'components_section_banner_sections';
  info: {
    displayName: 'Banner Section';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    cloudinaryId: Attribute.String;
    header: Attribute.Component<'common.component-header'>;
    title: Attribute.String;
  };
}

export interface SectionFeaturesSection extends Schema.Component {
  collectionName: 'components_section_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    featureComponents: Attribute.Component<'common.feature-component', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    header: Attribute.Component<'common.component-header'>;
    theme: Attribute.Component<'common.section-theme'>;
    footerText: Attribute.RichText;
    bodyText: Attribute.RichText;
  };
}

export interface SectionGalleryCarouselSection extends Schema.Component {
  collectionName: 'components_section_gallery_carousel_sections';
  info: {
    displayName: 'Gallery Carousel Section';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'common.component-header'>;
    filterBy: Attribute.Enumeration<['tag', 'meta-property']> &
      Attribute.Required;
    filterValue: Attribute.String & Attribute.Required;
    showWatermarks: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionGalleryGridSection extends Schema.Component {
  collectionName: 'components_section_gallery_grid_sections';
  info: {
    displayName: 'Gallery Grid Section';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'common.component-header'>;
    filterBy: Attribute.Enumeration<['tag', 'meta-property']> &
      Attribute.Required;
    filterValue: Attribute.String & Attribute.Required;
    showWatermarks: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionMapSection extends Schema.Component {
  collectionName: 'components_section_map_sections';
  info: {
    displayName: 'Map Section';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'common.component-header'>;
    theme: Attribute.Component<'common.section-theme'>;
    footerText: Attribute.RichText;
    bodyText: Attribute.RichText;
  };
}

export interface SectionQuestionsAndAnswersSection extends Schema.Component {
  collectionName: 'components_section_questions_and_answers_sections';
  info: {
    displayName: 'Questions and Answers Section';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'common.component-header'> & Attribute.Required;
    theme: Attribute.Component<'common.section-theme'>;
    footerText: Attribute.RichText;
    questionAndAnswerComponents: Attribute.Component<'common.q-and-a', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    bodyText: Attribute.RichText;
  };
}

export interface SectionReviewsSection extends Schema.Component {
  collectionName: 'components_section_reviews_sections';
  info: {
    displayName: 'Reviews Section';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'common.component-header'>;
    bodyText: Attribute.RichText;
    reviewsLayout: Attribute.Enumeration<['masonry', 'carousel']> &
      Attribute.Required &
      Attribute.DefaultTo<'carousel'>;
    theme: Attribute.Component<'common.section-theme'>;
    footerText: Attribute.RichText;
  };
}

export interface SectionTextAndImageSection extends Schema.Component {
  collectionName: 'components_section_type_part_text_and_images';
  info: {
    displayName: 'Text and Image Section';
    description: '';
  };
  attributes: {
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
    header: Attribute.Component<'common.component-header'>;
    bodyText: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    image: Attribute.Component<'common.image-tile'> & Attribute.Required;
    theme: Attribute.Component<'common.section-theme'>;
  };
}

export interface SectionTextSection extends Schema.Component {
  collectionName: 'components_section_text_sections';
  info: {
    displayName: 'Text Section';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'common.component-header'>;
    bodyText: Attribute.RichText;
    theme: Attribute.Component<'common.section-theme'>;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_page_metas';
  info: {
    displayName: 'meta';
    description: '';
  };
  attributes: {
    tagId: Attribute.String;
    name: Attribute.String;
    content: Attribute.Text;
    additionalProperties: Attribute.Component<'common.key-value-pair', true>;
    ref: Attribute.String & Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.button-function': CommonButtonFunction;
      'common.button-link': CommonButtonLink;
      'common.button-theme': CommonButtonTheme;
      'common.cloudinary-image': CommonCloudinaryImage;
      'common.component-header': CommonComponentHeader;
      'common.feature-component': CommonFeatureComponent;
      'common.image-tile': CommonImageTile;
      'common.key-value-pair': CommonKeyValuePair;
      'common.nav-page': CommonNavPage;
      'common.orientation-style': CommonOrientationStyle;
      'common.q-and-a': CommonQAndA;
      'common.section-theme': CommonSectionTheme;
      'common.text-component': CommonTextComponent;
      'image.cloudinary-image-transformation': ImageCloudinaryImageTransformation;
      'section.banner-content-section': SectionBannerContentSection;
      'section.banner-section': SectionBannerSection;
      'section.features-section': SectionFeaturesSection;
      'section.gallery-carousel-section': SectionGalleryCarouselSection;
      'section.gallery-grid-section': SectionGalleryGridSection;
      'section.map-section': SectionMapSection;
      'section.questions-and-answers-section': SectionQuestionsAndAnswersSection;
      'section.reviews-section': SectionReviewsSection;
      'section.text-and-image-section': SectionTextAndImageSection;
      'section.text-section': SectionTextSection;
      'seo.meta': SeoMeta;
    }
  }
}
