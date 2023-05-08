import { defineStore } from 'pinia';
import { ref } from 'vue';
import type MapLayer from '@/interfaces/MapLayerInterface';
import streetsImg from '@/assets/streets.png';
import satelliteImg from '@/assets/satellite.png';

const useMapLayerStore = defineStore('mapLayer', () => {
  // State
  const MapLayers = ref<MapLayer[]>([
    {
      title: 'All',
      button_type: 'big',
      url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      type: 'raster',
      visible: false,
      image: streetsImg,
      button_color: 'brown-lighten-1',
      active: true,
    },
    {
      title: 'Built',
      button_type: 'small',
      url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      type: 'raster',
      visible: false,
      icon: 'mdi-office-building',
      button_color: 'amber-lighten-4',
      active: true,
    },
    {
      title: 'Treeloss',
      button_type: 'small',
      url: 'https://tiles.globalforestwatch.org/umd_tree_cover_loss/v1.9/tcd_30/{z}/{x}/{y}.png',
      type: 'raster',
      visible: false,
      icon: 'mdi-tree',
      button_color: 'red-lighten-3',
      active: true,
    },
    {
      title: 'Fire',
      button_type: 'small',
      url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      type: 'raster',
      visible: false,
      icon: 'mdi-fire',
      button_color: 'amber-lighten-4',
      active: true,
    },
    {
      title: 'Bare',
      button_type: 'small',
      url: 'https://tiles.globalforestwatch.org/umd_tree_cover_loss/v1.9/tcd_30/{z}/{x}/{y}.png',
      type: 'raster',
      visible: false,
      icon: 'mdi-square-rounded',
      button_color: 'red-lighten-3',
      active: true,
    },
    {
      title: 'Mines',
      button_type: 'small',
      url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      type: 'raster',
      visible: false,
      icon: 'mdi-shovel',
      button_color: 'amber-lighten-4',
      active: true,
    },
    {
      title: 'Crops',
      button_type: 'small',
      url: 'https://tiles.globalforestwatch.org/umd_tree_cover_loss/v1.9/tcd_30/{z}/{x}/{y}.png',
      type: 'raster',
      visible: false,
      icon: 'mdi-barley',
      button_color: 'red-lighten-3',
      active: true,
    },
    {
      title: 'Rivers',
      button_type: 'big',
      url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      type: 'raster',
      visible: false,
      image: satelliteImg,
      button_color: 'brown-lighten-1',
      active: true,
    },
  ]);

  // Getters
  /** Get layers */
  function getVisibleLayers(): MapLayer[] {
    return MapLayers.value.filter(layer => layer.visible);
  }

  // Actions
  /** Toggle layer visibility*/
  function toggleLayerVisibility(title: string): void {
    const layerToUpdate = MapLayers.value.find(layer => layer.title === title);
    if (layerToUpdate) {
      layerToUpdate.visible = !layerToUpdate.visible;
    }
  }

  return { MapLayers, getVisibleLayers, toggleLayerVisibility };
});

export default useMapLayerStore;
