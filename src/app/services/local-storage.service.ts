import { Injectable } from '@angular/core';
import { IChannels } from '../ichannels'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly storageKey = 'F13-app';

  constructor() { }

  addChannel(channel: IChannels): void {
    const channels = this.getChannels();
    channels.push(channel);
    localStorage.setItem(this.storageKey, JSON.stringify(channels));
  }

  getChannels(): IChannels[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getChannelById(id: number): IChannels | undefined {
    const channels = this.getChannels();
    return channels.find(channel => channel.id === id);
  }

  removeChannelById(id: number): void {
    let channels = this.getChannels();
    channels = channels.filter(channel => channel.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(channels));
  }

  updateChannel(channel: IChannels): void {
    let channels = this.getChannels();
    const index = channels.findIndex(c => c.id === channel.id);
    if (index !== -1) {
      channels[index] = channel;
      localStorage.setItem(this.storageKey, JSON.stringify(channels));
    }
  }
}

