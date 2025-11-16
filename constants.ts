
import type { DataPoint } from './types';

export const DATA_POINTS: DataPoint[] = [
  { id: 'voltage', label: 'Voltage', unit: 'V' },
  { id: 'lineCurrent', label: 'Line Current', unit: 'A' },
  { id: 'power', label: 'Power', unit: 'W' },
  { id: 'rpm', label: 'Motor RPM', unit: '' },
  { id: 'speed', label: 'Speed', unit: 'km/h' },
  { id: 'gear', label: 'Gear', unit: '' },
  { id: 'controllerTemp', label: 'Controller Temp', unit: 'C' },
  { id: 'motorTemp', label: 'Motor Temp', unit: 'C' },
  { id: 'soc', label: 'State of Charge (SOC)', unit: '%' },
  { id: 'isRegenFromCurrent', label: 'Regen Active', unit: '' },
];
