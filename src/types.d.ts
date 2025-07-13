export interface ChecklistStep {
  id: number;
  text: string;
}

export interface Checklist {
  id: string;
  title: string;
  description: string;
  steps: ChecklistStep[];
}
