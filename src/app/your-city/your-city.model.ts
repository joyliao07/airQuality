export interface Post {
  status?: string;
  data?: {
    city?: string;
    state?: string;
    country?: string;
    location?: {
      type?: string;
      coordinates?: Array<number>
    };
    current?: {
      weather?: {
        ts?: string;
        tp?: number;
        pr?: number;
        hu?: number;
        ws?: number;
        wd?: number;
        ic?: string
      };
      pollution?: {
        ts?: string;
        aqius?: number;
        mainus?: string;
        aqicn?: number;
        maincn?: string
      }
    }
  }
};
