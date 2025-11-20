import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  img: string;
}

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private projects: Project[] = [
    { id: 'p1', title: 'Residential Villa', description: 'Luxury villa finishing and interior work', img: 'assets/demo-1.svg' },
    { id: 'p2', title: 'Commercial Complex', description: 'Facade and interior design for commercial use', img: 'assets/demo-2.svg' },
    { id: 'p3', title: 'Office Fit-Out', description: 'Modern office spaces with acoustic solutions', img: 'assets/demo-3.svg' },
  ];

  private news: NewsItem[] = [
    { id: 'n1', title: 'Project Completed', summary: 'We finished the villa project with great results.', img: 'assets/demo-1.svg' },
    { id: 'n2', title: 'New Office Launch', summary: 'Opening of our new design studio in the city center.', img: 'assets/demo-2.svg' },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getNews(): NewsItem[] {
    return this.news;
  }

  getPartners(): string[] {
    // Use public placeholder images for partner logos
    return [
      'https://picsum.photos/seed/p1/240/80',
      'https://picsum.photos/seed/p2/240/80',
      'https://picsum.photos/seed/p3/240/80',
      'https://picsum.photos/seed/p4/240/80',
      'https://picsum.photos/seed/p5/240/80',
      'https://picsum.photos/seed/p6/240/80'
    ];
  }

  getClientCount(): number {
    return 254; // mock
  }

  // feedback storage (mock)
  private feedback: Array<{ name: string; message: string; rating: number; date?: string }> = [];
  private sampleFeedback: Array<{ name: string; message: string; rating: number; date?: string }> = [
    { name: 'أحمد محمد', message: 'تنفيذ احترافي وفرق عمل متميزة، أنصح بشدة.', rating: 5, date: '2025-10-12' },
    { name: 'سارة علي', message: 'التزام بالمواعيد وجودة في التشطيبات.', rating: 5, date: '2025-09-03' },
    { name: 'محمود حسين', message: 'خدمة عملاء ممتازة وسرعة في التنفيذ.', rating: 5, date: '2025-08-21' }
  ];

  addFeedback(f: { name: string; message: string; rating: number }) {
    this.feedback.unshift({ ...f, date: new Date().toISOString().slice(0,10) });
  }

  getFeedbacks() {
    // return sample feedback first then any user-submitted ones
    return [...this.sampleFeedback, ...this.feedback];
  }

  // Additional mock stats
  getNewClientsCount(): number { return 200; }
  getUnderConstructionPropertiesCount(): number { return 200; }
  getCurrentClientsCount(): number { return 320; }
  getNewProjectsCount(): number { return 12; }

}
