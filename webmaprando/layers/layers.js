var wms_layers = [];

        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRIWorldTopo_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });var format_rando_sthilaire_1 = new ol.format.GeoJSON();
var features_rando_sthilaire_1 = format_rando_sthilaire_1.readFeatures(json_rando_sthilaire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rando_sthilaire_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rando_sthilaire_1.addFeatures(features_rando_sthilaire_1);var lyr_rando_sthilaire_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rando_sthilaire_1, 
                style: style_rando_sthilaire_1,
                title: '<img src="styles/legend/rando_sthilaire_1.png" /> rando_sthilaire'
            });var format_sommets_2 = new ol.format.GeoJSON();
var features_sommets_2 = format_sommets_2.readFeatures(json_sommets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sommets_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sommets_2.addFeatures(features_sommets_2);var lyr_sommets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sommets_2, 
                style: style_sommets_2,
                title: '<img src="styles/legend/sommets_2.png" /> sommets'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_rando_sthilaire_1.setVisible(true);lyr_sommets_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_rando_sthilaire_1,lyr_sommets_2];
lyr_rando_sthilaire_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_sommets_2.set('fieldAliases', {'id': 'id', 'Sommet': 'Sommet', 'Altitude': 'Altitude', });
lyr_rando_sthilaire_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_sommets_2.set('fieldImages', {'id': 'TextEdit', 'Sommet': 'TextEdit', 'Altitude': 'TextEdit', });
lyr_rando_sthilaire_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_sommets_2.set('fieldLabels', {'id': 'no label', 'Sommet': 'no label', 'Altitude': 'no label', });
lyr_sommets_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});