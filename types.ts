
export interface DataPoint {
  id: keyof FardriverData;
  label: string;
  unit: string;
}

export interface FardriverData {
  voltage: number;
  lineCurrent: number;
  power: number;
  rpm: number;
  rawRpm: number;
  gear: number;
  speed: number;
  controllerTemp: number;
  motorTemp: number;
  soc: number;
  isRegenFromCurrent: boolean;
}

export interface AppConfig {
  serviceUUID: string;
  characteristicUUID: string;
  
  wheelCircumference: number;
  motorPolePairs: number;
  
  enableSDLogging: boolean;
  logFileName: string;
  sdCsPin: number;

  selectedDataPoints: string[];
}
