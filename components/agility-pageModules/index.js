import RichTextArea from "./RichTextArea/RichTextArea";
import FeaturedPost from "./FeaturePost/FeaturedPost";
import PostsListing from "./PostListing/PostsListing";
import PostDetails from "./PostDetails/PostDetails";
import ImageComponent from "./ImageComponent/ImageComponent";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Heading from "./Heading/Heading";
import TwoHeadings from "./TwoHeadings/TwoHeadings";
import TextBlockWithImage from "./TextBlockWithImage/TextBlockWithImage";
import WeatherSearch from "./WeatherSearch/WeatherSearch";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "TextBlockWithImage", module: TextBlockWithImage },
  { name: "Heading", module: Heading },
  { name: "TwoHeadings", module: TwoHeadings },
  { name: "FeaturedPost", module: FeaturedPost },
  { name: "PostsListing", module: PostsListing },
  { name: "PostDetails", module: PostDetails },
  { name: "RichTextArea", module: RichTextArea },
  { name: "RichTextArea", module: RichTextArea },
  { name: "ImageComponent", module: ImageComponent },
  { name: "ImageCarousel", module: ImageCarousel },
  { name: "WeatherSearch", module: WeatherSearch }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};
