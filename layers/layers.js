var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_house_1 = new ol.format.GeoJSON();
var features_building_house_1 = format_building_house_1.readFeatures(json_building_house_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_1.addFeatures(features_building_house_1);
var lyr_building_house_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_house_1, 
                style: style_building_house_1,
                interactive: true,
                title: '<img src="styles/legend/building_house_1.png" /> building_house'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_house_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_house_1];
lyr_building_house_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', });
lyr_building_house_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', });
lyr_building_house_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', });
lyr_building_house_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});