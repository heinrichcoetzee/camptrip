import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'trips',
        children: [
          {
            path: '',
            loadChildren: './trips/trips.module#TripsPageModule'
          }
        ]
      },
      {
        path: 'addtrip',
        children: [
          {
            path: '',
            loadChildren: './addtrip/addtrip.module#AddtripPageModule'
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: './explore/explore.module#ExplorePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: './profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
