import { Colors } from "../../../../../shared/interface/colors";

export interface ItemCourseCard {
  title: string;
  subtitle: string;
  point: {
    level: string;
    duration: string;
  },
  color: Colors;
  description: string;
  listLearn: string[];
  technologies: string[];
}
