import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { TvComponent } from './components/tv/tv.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: "Route |Home Page " },
    { path: 'about', component: AboutComponent, title: "Route |About Page " },
    { path: 'contact', component: ContactComponent, title: "Route |Contact Page " },
    { path: 'notFound', component: NotFoundComponent, title: "Route |Not Found  Page" },
    {
        path: 'gallery', component: GalleryComponent, title: "Route |Gallery page", children: [
            { path: 'laptop', component: LaptopComponent, title: 'Route |Gallery page |Laptop' },
            { path: 'mobile', component: MobileComponent, title: 'Route |Gallery page |Mobile' },
            { path: 'tv', component: TvComponent, title: 'Route |Gallery page |TV' }
        ]
    },
    { path: "**", redirectTo: 'notFound', pathMatch: "full" } //Not found path
];
