export interface EducationContentItem {
  id: number;
  title: string;
  content_type: 'articulo' | 'video' | 'podcast';
  level: string;
  content_url: string;
  image_url: string;
  created_at: string;
}
