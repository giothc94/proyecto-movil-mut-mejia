import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarcadoresRutasService {

  constructor() { }
  /*
  * C = Cutuglagua
  * T = Tambillo
  * A = Aloag
  * M = Machachi
  * U = Uyumbicho
  * Tp = Tandapi
  * Ch = Chaupi
  */

  public rutas = [
    {
      nombreRuta: 'Cutuglagua - Machachi',
      abr: 'rutaCTAM',
      marcadores: [
        {
          position: { lat: -0.281555, lng: -78.5343185 },
          title: 'La joya',
          icon: 'blue'
        },
        {
          position: { lat: -0.4066126, lng: -78.5462098 },
          title: 'Campo santo',
          icon: 'blue'
        },
        {
          position: { lat: -0.4679264, lng: -78.5845374 },
          title: 'La curva de Santa Rosa',
          icon: 'blue'
        },
        {
          position: { lat: -0.5107264, lng: -78.5717631 },
          title: 'Colegio Ismael Proaño',
          icon: 'blue'
        }
      ],
      paradas: [
        { nombreParada: 'la joya ' },
        { nombreParada: 'Campo Santo (Santa rosa)' },
        { nombreParada: 'La curva de Santa Rosa' },
        { nombreParada: 'Colegio Ismael Proaño' },
        { nombreParada: 'Miraflores' },
        { nombreParada: 'San Alfonso' },
        { nombreParada: 'Cuartel (Fuerte militar Atahualpa)' },
        { nombreParada: 'El portal de machachi (el caballito)' },
        { nombreParada: 'Teatro Carlos Brito Benavidez' },
        { nombreParada: 'Estadio el Chan' },
        { nombreParada: 'centro de revisión vehicular Mejía' }
      ]
    },
    {
      nombreRuta: 'Tambillo - Uyumbicho',
      abr: 'rutaTU',
      marcadores: [
        {
          position: { lat: -0.4066126, lng: -78.5462098 },
          title: 'Escuela America',
          icon: 'purple'
        },
        {
          position: { lat: 0.3899499, lng: -78.5250565 },
          title: 'Valle hermoso',
          icon: 'purple'
        }
      ],
      paradas: [
        { nombreParada: 'Escuela América y España' },
        { nombreParada: 'Valle Hermoso' },
        { nombreParada: 'Colegio Uyumbicho' },
        { nombreParada: 'Parque de uyumbicho' },
        { nombreParada: 'Estadio de Uyumbicho' },
        { nombreParada: 'Planta KFC' }
      ]
    },
    {
      nombreRuta: 'Tambillo - Machachi',
      abr: 'rutaTAM',
      marcadores: [
        {
          position: { lat: -0.4066126, lng: -78.5462098 },
          title: 'Colegio Ismael Proaño',
          icon: 'yellow'
        },
        {
          position: { lat: -0.4679264, lng: -78.5845374 },
          title: 'Miraflores',
          icon: 'yellow'
        },
        {
          position: { lat: -0.5107264, lng: -78.5717631 },
          title: 'San Alfonso',
          icon: 'yellow'
        }
      ],
      paradas: [
        { nombreParada: 'Colegio Ismael Proaño' },
        { nombreParada: 'Miraflores' },
        { nombreParada: 'San Alfonso' },
        { nombreParada: 'Cuartel (Fuerte militar Atahualpa)' },
        { nombreParada: 'El portal de machachi (el caballito)' },
        { nombreParada: 'Teatro Carlos Brito Benavidez' },
        { nombreParada: 'Estadio el Chan' },
        { nombreParada: 'centro de revisión vehicular Mejía' }
      ]
    },

    {
      nombreRuta: 'Aloag - Tandapi',
      abr: 'rutaATpM',
      marcadores: [
        {
          position: { lat: -0.4679264, lng: -78.5845374 },
          title: 'Obelisco',
          icon: 'green'
        },
        {
          position: { lat: -0.4152721, lng: -78.8001452 },
          title: 'Hacienda turistica Gualilagua',
          icon: 'green'
        },
        {
          position: { lat: -0.5107264, lng: -78.5717631 },
          title: 'Adelca',
          icon: 'green'
        }
      ],
      paradas: [
        { nombreParada: 'Obelisco' },
        { nombreParada: 'Hacienda turística Gualilagua de lasso' },
        { nombreParada: 'Adelca' },
        { nombreParada: 'Colegio Aloag' },
        { nombreParada: 'Plaza de aloag' }
      ]
    },

    {
      nombreRuta: 'Machachi - Chaupi',
      abr: 'rutaMCh',
      marcadores: [
        {
          position: { lat: -0.5107264, lng: -78.5717631 },
          title: 'Mercado de papas Machachi'
        },
        {
          position: { lat: -0.599238, lng: -78.639069 },
          title: 'Estadio el Chan'
        }
      ],
      paradas: [
        { nombreParada: 'Mercado de papas machahi ' },
        { nombreParada: 'Estadio el chan' },
        { nombreParada: 'Aki machachi' },
        { nombreParada: 'Parque de aloasi' },
        { nombreParada: 'Colegio aloasi ' }
      ]
    }
  ]



}
