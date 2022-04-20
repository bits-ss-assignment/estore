import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product-category',
        data: { pageTitle: 'estoreApp.productCategory.home.title' },
        loadChildren: () => import('./product-category/product-category.module').then(m => m.ProductCategoryModule),
      },
      {
        path: 'notification',
        data: { pageTitle: 'estoreApp.notificationNotification.home.title' },
        loadChildren: () => import('./notification/notification/notification.module').then(m => m.NotificationNotificationModule),
      },
      {
        path: 'product-order',
        data: { pageTitle: 'estoreApp.productOrder.home.title' },
        loadChildren: () => import('./product-order/product-order.module').then(m => m.ProductOrderModule),
      },
      {
        path: 'invoice',
        data: { pageTitle: 'estoreApp.invoiceInvoice.home.title' },
        loadChildren: () => import('./invoice/invoice/invoice.module').then(m => m.InvoiceInvoiceModule),
      },
      {
        path: 'customer',
        data: { pageTitle: 'estoreApp.customer.home.title' },
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'product',
        data: { pageTitle: 'estoreApp.product.home.title' },
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'shipment',
        data: { pageTitle: 'estoreApp.invoiceShipment.home.title' },
        loadChildren: () => import('./invoice/shipment/shipment.module').then(m => m.InvoiceShipmentModule),
      },
      {
        path: 'order-item',
        data: { pageTitle: 'estoreApp.orderItem.home.title' },
        loadChildren: () => import('./order-item/order-item.module').then(m => m.OrderItemModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
