import { Archivo } from './../../models/archivo.model';
import { FileService } from './../../services/file.service';
import { Categoria } from './../../models/categoria.model';
import { Estado } from './../../models/estado.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../models/producto.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kardex-desarrollo-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductoComponent implements OnInit {
  productDialog: boolean;

  productCantidadDialog: boolean;

  products: Producto[];

  product: Producto;

  selectedProducts: Producto[];

  submitted: boolean;

  statuses: Estado[];

  status: Estado;

  categorias: Categoria[];

  categoria: Categoria;

  disponibles = 0;

  vendidos = 0;

  cantidad = 0;

  uploadedFiles: any[] = [];

  archivo: Archivo;

  file: any;

  constructor(
    private productoService: ProductoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fileService: FileService
  ) {
    this.statuses = [
      { label: 'N/A', value: 0 },
      { label: 'CON STOCK', value: 1 },
      { label: 'BAJO STOCK', value: 2 },
      { label: 'SIN STOCK', value: 3 },
    ];

    this.categorias = [
      { label: 'N/A', value: '0' },
      { label: 'Vasos', value: '1' },
      { label: 'Mochilas', value: '2' },
      { label: 'Ropa', value: '3' },
    ];
  }

  ngOnInit() {
    this.productoService.getProductos().then((data) => {
      this.products = data;
      for (const valor of this.products) {
        this.disponibles += valor.disponibles;
        this.cantidad += valor.cantidad;
        this.vendidos += valor.vendidos;
      }
    });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message:
        '¿Está seguro de que desea eliminar los productos seleccionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(
          (val) => !this.selectedProducts.includes(val)
        );
        for (const valor of this.selectedProducts) {
          this.productoService.deleteProducto(valor.id).subscribe();
        }
        this.selectedProducts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Productos Eliminados',
          life: 3000,
        });
      },
    });
  }

  editProduct(product: Producto) {
    this.product = { ...product };
    this.productDialog = true;
  }

  cantidadProduct(product: Producto) {
    this.product = { ...product };
    this.productCantidadDialog = true;
  }

  deleteProduct(product: Producto) {
    this.confirmationService.confirm({
      message: '¿Estás segura de que quieres eliminar ' + product.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.productoService.deleteProducto(product.id).subscribe();
        this.product = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Producto Eliminado',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.nombre.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        if (this.product.img == '' || this.product.img == undefined) {
          this.product.img = 'producto.jpg';
        }
        this.productoService.updateProducto(this.product).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Producto Actualizado',
          life: 3000,
        });
      } else {
        if (this.file) {
          this.product.img = this.file.name;
          console.log('file', this.file);
        }
        if (this.product.img == '' || this.product.img == undefined) {
          this.product.img = 'producto.jpg';
        }
        this.products.push(this.product);
        this.productoService.saveProducto(this.product).subscribe((data) => {
          console.log(data);
          this.subirImg();
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Producto Creado',
          life: 3000,
        });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.productCantidadDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  getCategoria(value: string): string {
    const resultadoCategorias = this.categorias.find(
      (categoria) => categoria.value === value
    );
    return resultadoCategorias.label;
  }

  getEstado(value: number): string {
    const resultadoEstados = this.statuses.find(
      (status) => status.value === value
    );
    return resultadoEstados.label;
  }

  onUpload(event) {
    //event.files == files to upload
    this.file = event.files[0];
    this.product.img = this.file.name;
  }

  subirImg() {
    this.archivo = {};
    this.archivo.nombre = this.file.name;
    this.archivo.nombreArchivo = this.file.name;
    if (this.file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }

  _handleReaderLoaded(readerEvent) {
    const binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
    this.upload();
  }

  upload() {
    this.fileService.uploadFile(this.archivo).subscribe((datos) => {
      if (datos['resultado'] == 'OK') {
        this.messageService.add({
          severity: 'info',
          summary: 'File Uploaded',
          detail: '',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'File NO Uploaded',
          detail: '',
        });
      }
    });
  }

  modificarDisponibles(e) {
    console.log('entre', e);
    if (this.product.cantidad - this.product.vendidos < 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Disponibles no puede ser un valor negativo',
        detail: '',
      });
      this.product.cantidad = 0;
    } else {
      this.product.disponibles = this.product.cantidad - this.product.vendidos;
    }
  }
}
