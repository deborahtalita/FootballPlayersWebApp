export interface Position {
  id: number;
  shirtNo: number;
  name: string;
  positionId?: number;
  appearances?: number;
  goals?: number;
  goalsPerMatch?: number;
  position?: Position;
}
