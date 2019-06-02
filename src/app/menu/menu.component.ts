import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Router } from '@angular/router';

interface FeatureNode {
  name: string;
  link?: string;
  children?: FeatureNode[];
}

const DEMO_DATA: FeatureNode[] = [
  {
    name: 'Overlay',
    children: [
      {name: 'Snackbar', link: '/overlay/snackbar'},
    ]
  },
];

interface FlatNode {
  expandable: boolean;
  name: string;
  link: string;
  level: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private featureToFlat = (node: FeatureNode, level: number): FlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      link: node.link ? node.link : '',
      level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.featureToFlat,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router) {
    this.dataSource.data = DEMO_DATA;
  }

  ngOnInit() {
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
