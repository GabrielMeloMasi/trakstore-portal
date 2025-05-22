import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-market-page',
  imports: [CommonModule],
  templateUrl: './market-page.component.html',
  styleUrl: './market-page.component.css'
})
export class MarketPageComponent {
 produtos = [
    {
      nome: 'MP9 | Mount Fuji',
      preco: 80.51,
      precoDolar: 14.26,
      estado: 'FT ST™',
      imagem: 'https://via.placeholder.com/300x200?text=MP9',
      quantidade: 3
    },
    {
      nome: 'Desert Eagle | Night',
      preco: 98.74,
      precoDolar: 17.49,
      estado: 'MW',
      imagem: 'https://via.placeholder.com/300x200?text=Deagle',
      quantidade: 64
    },
    {
      nome: 'AK-47 | Midnight Laminate',
      preco: 169.36,
      precoDolar: 30.00,
      estado: 'FT',
      imagem: 'https://via.placeholder.com/300x200?text=AK-47',
      quantidade: 3
    },
    {
      nome: 'FAMAS | Bad Trip',
      preco: 47.99,
      precoDolar: 8.50,
      estado: 'MW',
      imagem: 'https://via.placeholder.com/300x200?text=FAMAS',
      quantidade: 4
    },
    {
      nome: 'USP-S | Blueprint',
      preco: 75.31,
      precoDolar: 13.34,
      estado: 'FT ST™',
      imagem: 'https://via.placeholder.com/300x200?text=USP-S',
      quantidade: 23
    },
    {
      nome: 'M4A1-S | Dark Water',
      preco: 924.77,
      precoDolar: 163.81,
      estado: 'MW ST™',
      imagem: 'https://via.placeholder.com/300x200?text=M4A1-S',
      quantidade: 7
    },
    {
      nome: 'UMP-45 | Wild Child',
      preco: 22.58,
      precoDolar: 4.00,
      estado: 'MW',
      imagem: 'https://via.placeholder.com/300x200?text=UMP-45',
      quantidade: 22
    },
    {
      nome: 'AK-47 | Slate',
      preco: 32.40,
      precoDolar: 5.74,
      estado: 'FT',
      imagem: 'https://via.placeholder.com/300x200?text=Slate',
      quantidade: 217
    },
    {
      nome: 'Glock-18 | Water Elemental',
      preco: 24.22,
      precoDolar: 4.29,
      estado: 'FT',
      imagem: 'https://via.placeholder.com/300x200?text=Glock',
      quantidade: 106
    },
    {
      nome: 'P2000 | Wicked Sick',
      preco: 22.36,
      precoDolar: 3.96,
      estado: 'MW',
      imagem: 'https://via.placeholder.com/300x200?text=P2000',
      quantidade: 10
    }
  ];
}
