var wms_layers = [];

        var lyr_ESRISatelit_0 = new ol.layer.Tile({
            'title': 'ESRI Satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        var lyr_GoogleSatelite_2 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_AreaPenelitian2_3 = new ol.format.GeoJSON();
var features_AreaPenelitian2_3 = format_AreaPenelitian2_3.readFeatures(json_AreaPenelitian2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPenelitian2_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_AreaPenelitian2_3.addFeatures(features_AreaPenelitian2_3);var lyr_AreaPenelitian2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaPenelitian2_3, 
                style: style_AreaPenelitian2_3,
    title: 'Area Penelitian 2<br />\
    <img src="styles/legend/AreaPenelitian2_3_0.png" /> <br />\
    <img src="styles/legend/AreaPenelitian2_3_1.png" /> Perairan<br />\
    <img src="styles/legend/AreaPenelitian2_3_2.png" /> Stasiun 2<br />'
        });var format_AreaPenelitian_4 = new ol.format.GeoJSON();
var features_AreaPenelitian_4 = format_AreaPenelitian_4.readFeatures(json_AreaPenelitian_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPenelitian_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_AreaPenelitian_4.addFeatures(features_AreaPenelitian_4);var lyr_AreaPenelitian_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaPenelitian_4, 
                style: style_AreaPenelitian_4,
    title: 'Area Penelitian<br />\
    <img src="styles/legend/AreaPenelitian_4_0.png" /> Kebun Sawit<br />\
    <img src="styles/legend/AreaPenelitian_4_1.png" /> Stasiun 1<br />\
    <img src="styles/legend/AreaPenelitian_4_2.png" /> <br />\
    <img src="styles/legend/AreaPenelitian_4_3.png" /> Peraiaran<br />'
        });var format_AreaPenelitian4_5 = new ol.format.GeoJSON();
var features_AreaPenelitian4_5 = format_AreaPenelitian4_5.readFeatures(json_AreaPenelitian4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPenelitian4_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_AreaPenelitian4_5.addFeatures(features_AreaPenelitian4_5);var lyr_AreaPenelitian4_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaPenelitian4_5, 
                style: style_AreaPenelitian4_5,
    title: 'Area Penelitian 4<br />\
    <img src="styles/legend/AreaPenelitian4_5_0.png" /> Perairan<br />\
    <img src="styles/legend/AreaPenelitian4_5_1.png" /> Stasiun 4<br />\
    <img src="styles/legend/AreaPenelitian4_5_2.png" /> <br />'
        });var format_AreaPenelitian3_6 = new ol.format.GeoJSON();
var features_AreaPenelitian3_6 = format_AreaPenelitian3_6.readFeatures(json_AreaPenelitian3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPenelitian3_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_AreaPenelitian3_6.addFeatures(features_AreaPenelitian3_6);var lyr_AreaPenelitian3_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaPenelitian3_6, 
                style: style_AreaPenelitian3_6,
                title: '<img src="styles/legend/AreaPenelitian3_6.png" /> Area Penelitian 3'
            });var format_TempatPoint_7 = new ol.format.GeoJSON();
var features_TempatPoint_7 = format_TempatPoint_7.readFeatures(json_TempatPoint_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPoint_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TempatPoint_7.addFeatures(features_TempatPoint_7);var lyr_TempatPoint_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempatPoint_7, 
                style: style_TempatPoint_7,
                title: '<img src="styles/legend/TempatPoint_7.png" /> Tempat Point'
            });var format_Duttaphrynusmelanostictus_8 = new ol.format.GeoJSON();
var features_Duttaphrynusmelanostictus_8 = format_Duttaphrynusmelanostictus_8.readFeatures(json_Duttaphrynusmelanostictus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duttaphrynusmelanostictus_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Duttaphrynusmelanostictus_8.addFeatures(features_Duttaphrynusmelanostictus_8);var lyr_Duttaphrynusmelanostictus_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Duttaphrynusmelanostictus_8, 
                style: style_Duttaphrynusmelanostictus_8,
                title: '<img src="styles/legend/Duttaphrynusmelanostictus_8.png" /> Duttaphrynus melanostictus'
            });var format_Ingerophrynusdivergens_9 = new ol.format.GeoJSON();
var features_Ingerophrynusdivergens_9 = format_Ingerophrynusdivergens_9.readFeatures(json_Ingerophrynusdivergens_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ingerophrynusdivergens_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ingerophrynusdivergens_9.addFeatures(features_Ingerophrynusdivergens_9);var lyr_Ingerophrynusdivergens_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ingerophrynusdivergens_9, 
                style: style_Ingerophrynusdivergens_9,
                title: '<img src="styles/legend/Ingerophrynusdivergens_9.png" /> Ingerophrynus divergens'
            });var format_Polypedatesleucomystax_10 = new ol.format.GeoJSON();
var features_Polypedatesleucomystax_10 = format_Polypedatesleucomystax_10.readFeatures(json_Polypedatesleucomystax_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polypedatesleucomystax_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Polypedatesleucomystax_10.addFeatures(features_Polypedatesleucomystax_10);var lyr_Polypedatesleucomystax_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polypedatesleucomystax_10, 
                style: style_Polypedatesleucomystax_10,
                title: '<img src="styles/legend/Polypedatesleucomystax_10.png" /> Polypedates leucomystax'
            });var format_Polypedatesotilophus_11 = new ol.format.GeoJSON();
var features_Polypedatesotilophus_11 = format_Polypedatesotilophus_11.readFeatures(json_Polypedatesotilophus_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polypedatesotilophus_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Polypedatesotilophus_11.addFeatures(features_Polypedatesotilophus_11);var lyr_Polypedatesotilophus_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polypedatesotilophus_11, 
                style: style_Polypedatesotilophus_11,
                title: '<img src="styles/legend/Polypedatesotilophus_11.png" /> Polypedates otilophus'
            });var format_Microhylaberdmorei_12 = new ol.format.GeoJSON();
var features_Microhylaberdmorei_12 = format_Microhylaberdmorei_12.readFeatures(json_Microhylaberdmorei_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microhylaberdmorei_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Microhylaberdmorei_12.addFeatures(features_Microhylaberdmorei_12);var lyr_Microhylaberdmorei_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Microhylaberdmorei_12, 
                style: style_Microhylaberdmorei_12,
                title: '<img src="styles/legend/Microhylaberdmorei_12.png" /> Microhyla berdmorei'
            });var format_Leptolalaxgracilis_13 = new ol.format.GeoJSON();
var features_Leptolalaxgracilis_13 = format_Leptolalaxgracilis_13.readFeatures(json_Leptolalaxgracilis_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Leptolalaxgracilis_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Leptolalaxgracilis_13.addFeatures(features_Leptolalaxgracilis_13);var lyr_Leptolalaxgracilis_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Leptolalaxgracilis_13, 
                style: style_Leptolalaxgracilis_13,
                title: '<img src="styles/legend/Leptolalaxgracilis_13.png" /> Leptolalax gracilis'
            });var format_Amnirananicobariensis_14 = new ol.format.GeoJSON();
var features_Amnirananicobariensis_14 = format_Amnirananicobariensis_14.readFeatures(json_Amnirananicobariensis_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amnirananicobariensis_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Amnirananicobariensis_14.addFeatures(features_Amnirananicobariensis_14);var lyr_Amnirananicobariensis_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amnirananicobariensis_14, 
                style: style_Amnirananicobariensis_14,
                title: '<img src="styles/legend/Amnirananicobariensis_14.png" /> Amnirana nicobariensis'
            });var format_Chalcoranachalconota_15 = new ol.format.GeoJSON();
var features_Chalcoranachalconota_15 = format_Chalcoranachalconota_15.readFeatures(json_Chalcoranachalconota_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chalcoranachalconota_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Chalcoranachalconota_15.addFeatures(features_Chalcoranachalconota_15);var lyr_Chalcoranachalconota_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chalcoranachalconota_15, 
                style: style_Chalcoranachalconota_15,
                title: '<img src="styles/legend/Chalcoranachalconota_15.png" /> Chalcorana chalconota'
            });var format_Chalcoranaraniceps_16 = new ol.format.GeoJSON();
var features_Chalcoranaraniceps_16 = format_Chalcoranaraniceps_16.readFeatures(json_Chalcoranaraniceps_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chalcoranaraniceps_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Chalcoranaraniceps_16.addFeatures(features_Chalcoranaraniceps_16);var lyr_Chalcoranaraniceps_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chalcoranaraniceps_16, 
                style: style_Chalcoranaraniceps_16,
                title: '<img src="styles/legend/Chalcoranaraniceps_16.png" /> Chalcorana raniceps'
            });var format_Odorranahosii_17 = new ol.format.GeoJSON();
var features_Odorranahosii_17 = format_Odorranahosii_17.readFeatures(json_Odorranahosii_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Odorranahosii_17 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Odorranahosii_17.addFeatures(features_Odorranahosii_17);var lyr_Odorranahosii_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Odorranahosii_17, 
                style: style_Odorranahosii_17,
                title: '<img src="styles/legend/Odorranahosii_17.png" /> Odorrana hosii'
            });var format_Limnonectesfinchi_18 = new ol.format.GeoJSON();
var features_Limnonectesfinchi_18 = format_Limnonectesfinchi_18.readFeatures(json_Limnonectesfinchi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limnonectesfinchi_18 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limnonectesfinchi_18.addFeatures(features_Limnonectesfinchi_18);var lyr_Limnonectesfinchi_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limnonectesfinchi_18, 
                style: style_Limnonectesfinchi_18,
                title: '<img src="styles/legend/Limnonectesfinchi_18.png" /> Limnonectes finchi'
            });var format_Limnonecteskuhlii_19 = new ol.format.GeoJSON();
var features_Limnonecteskuhlii_19 = format_Limnonecteskuhlii_19.readFeatures(json_Limnonecteskuhlii_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limnonecteskuhlii_19 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limnonecteskuhlii_19.addFeatures(features_Limnonecteskuhlii_19);var lyr_Limnonecteskuhlii_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limnonecteskuhlii_19, 
                style: style_Limnonecteskuhlii_19,
                title: '<img src="styles/legend/Limnonecteskuhlii_19.png" /> Limnonectes kuhlii'
            });var format_Fejervaryacancrivora_20 = new ol.format.GeoJSON();
var features_Fejervaryacancrivora_20 = format_Fejervaryacancrivora_20.readFeatures(json_Fejervaryacancrivora_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fejervaryacancrivora_20 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Fejervaryacancrivora_20.addFeatures(features_Fejervaryacancrivora_20);var lyr_Fejervaryacancrivora_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fejervaryacancrivora_20, 
                style: style_Fejervaryacancrivora_20,
                title: '<img src="styles/legend/Fejervaryacancrivora_20.png" /> Fejervarya cancrivora'
            });var format_Limnonectesibanorum_21 = new ol.format.GeoJSON();
var features_Limnonectesibanorum_21 = format_Limnonectesibanorum_21.readFeatures(json_Limnonectesibanorum_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limnonectesibanorum_21 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limnonectesibanorum_21.addFeatures(features_Limnonectesibanorum_21);var lyr_Limnonectesibanorum_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limnonectesibanorum_21, 
                style: style_Limnonectesibanorum_21,
                title: '<img src="styles/legend/Limnonectesibanorum_21.png" /> Limnonectes ibanorum'
            });var format_Limnonectesleporinus_22 = new ol.format.GeoJSON();
var features_Limnonectesleporinus_22 = format_Limnonectesleporinus_22.readFeatures(json_Limnonectesleporinus_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limnonectesleporinus_22 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limnonectesleporinus_22.addFeatures(features_Limnonectesleporinus_22);var lyr_Limnonectesleporinus_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limnonectesleporinus_22, 
                style: style_Limnonectesleporinus_22,
                title: '<img src="styles/legend/Limnonectesleporinus_22.png" /> Limnonectes leporinus'
            });var format_Limnonectesparamacrodon_23 = new ol.format.GeoJSON();
var features_Limnonectesparamacrodon_23 = format_Limnonectesparamacrodon_23.readFeatures(json_Limnonectesparamacrodon_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limnonectesparamacrodon_23 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limnonectesparamacrodon_23.addFeatures(features_Limnonectesparamacrodon_23);var lyr_Limnonectesparamacrodon_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limnonectesparamacrodon_23, 
                style: style_Limnonectesparamacrodon_23,
                title: '<img src="styles/legend/Limnonectesparamacrodon_23.png" /> Limnonectes paramacrodon'
            });var format_Pulchranapicturata_24 = new ol.format.GeoJSON();
var features_Pulchranapicturata_24 = format_Pulchranapicturata_24.readFeatures(json_Pulchranapicturata_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pulchranapicturata_24 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Pulchranapicturata_24.addFeatures(features_Pulchranapicturata_24);var lyr_Pulchranapicturata_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pulchranapicturata_24, 
                style: style_Pulchranapicturata_24,
                title: '<img src="styles/legend/Pulchranapicturata_24.png" /> Pulchrana picturata'
            });var format_Ansoniaspinulifer_25 = new ol.format.GeoJSON();
var features_Ansoniaspinulifer_25 = format_Ansoniaspinulifer_25.readFeatures(json_Ansoniaspinulifer_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ansoniaspinulifer_25 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ansoniaspinulifer_25.addFeatures(features_Ansoniaspinulifer_25);var lyr_Ansoniaspinulifer_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ansoniaspinulifer_25, 
                style: style_Ansoniaspinulifer_25,
                title: '<img src="styles/legend/Ansoniaspinulifer_25.png" /> Ansonia spinulifer'
            });

lyr_ESRISatelit_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatelite_2.setVisible(true);lyr_AreaPenelitian2_3.setVisible(false);lyr_AreaPenelitian_4.setVisible(false);lyr_AreaPenelitian4_5.setVisible(false);lyr_AreaPenelitian3_6.setVisible(false);lyr_TempatPoint_7.setVisible(true);lyr_Duttaphrynusmelanostictus_8.setVisible(true);lyr_Ingerophrynusdivergens_9.setVisible(true);lyr_Polypedatesleucomystax_10.setVisible(true);lyr_Polypedatesotilophus_11.setVisible(true);lyr_Microhylaberdmorei_12.setVisible(true);lyr_Leptolalaxgracilis_13.setVisible(true);lyr_Amnirananicobariensis_14.setVisible(true);lyr_Chalcoranachalconota_15.setVisible(true);lyr_Chalcoranaraniceps_16.setVisible(true);lyr_Odorranahosii_17.setVisible(true);lyr_Limnonectesfinchi_18.setVisible(true);lyr_Limnonecteskuhlii_19.setVisible(true);lyr_Fejervaryacancrivora_20.setVisible(true);lyr_Limnonectesibanorum_21.setVisible(true);lyr_Limnonectesleporinus_22.setVisible(true);lyr_Limnonectesparamacrodon_23.setVisible(true);lyr_Pulchranapicturata_24.setVisible(true);lyr_Ansoniaspinulifer_25.setVisible(true);
var layersList = [lyr_ESRISatelit_0,lyr_OpenStreetMap_1,lyr_GoogleSatelite_2,lyr_AreaPenelitian2_3,lyr_AreaPenelitian_4,lyr_AreaPenelitian4_5,lyr_AreaPenelitian3_6,lyr_TempatPoint_7,lyr_Duttaphrynusmelanostictus_8,lyr_Ingerophrynusdivergens_9,lyr_Polypedatesleucomystax_10,lyr_Polypedatesotilophus_11,lyr_Microhylaberdmorei_12,lyr_Leptolalaxgracilis_13,lyr_Amnirananicobariensis_14,lyr_Chalcoranachalconota_15,lyr_Chalcoranaraniceps_16,lyr_Odorranahosii_17,lyr_Limnonectesfinchi_18,lyr_Limnonecteskuhlii_19,lyr_Fejervaryacancrivora_20,lyr_Limnonectesibanorum_21,lyr_Limnonectesleporinus_22,lyr_Limnonectesparamacrodon_23,lyr_Pulchranapicturata_24,lyr_Ansoniaspinulifer_25];
lyr_AreaPenelitian2_3.set('fieldAliases', {'Keterangan': 'Keterangan', });
lyr_AreaPenelitian_4.set('fieldAliases', {'Keterangan': 'Keterangan', });
lyr_AreaPenelitian4_5.set('fieldAliases', {'Keterangan': 'Keterangan', });
lyr_AreaPenelitian3_6.set('fieldAliases', {'Keterangan': 'Keterangan', });
lyr_TempatPoint_7.set('fieldAliases', {'Nama': 'Nama', });
lyr_Duttaphrynusmelanostictus_8.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Ingerophrynusdivergens_9.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Polypedatesleucomystax_10.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Polypedatesotilophus_11.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Microhylaberdmorei_12.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Leptolalaxgracilis_13.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Amnirananicobariensis_14.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Chalcoranachalconota_15.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Chalcoranaraniceps_16.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Odorranahosii_17.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Limnonectesfinchi_18.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Limnonecteskuhlii_19.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Fejervaryacancrivora_20.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Limnonectesibanorum_21.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Limnonectesleporinus_22.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', });
lyr_Limnonectesparamacrodon_23.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', 'Spesies': 'Spesies', 'Foto': 'Foto', });
lyr_Pulchranapicturata_24.set('fieldAliases', {'Habitat': 'Habitat', 'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', 'Spesies': 'Spesies', 'Foto': 'Foto', });
lyr_Ansoniaspinulifer_25.set('fieldAliases', {'Status': 'Status', 'Substrat': 'Substrat', 'Famili': 'Famili', 'Spesies': 'Spesies', 'Habitat': 'Habitat', 'Foto': 'Foto', });
lyr_AreaPenelitian2_3.set('fieldImages', {'Keterangan': 'TextEdit', });
lyr_AreaPenelitian_4.set('fieldImages', {'Keterangan': 'TextEdit', });
lyr_AreaPenelitian4_5.set('fieldImages', {'Keterangan': 'TextEdit', });
lyr_AreaPenelitian3_6.set('fieldImages', {'Keterangan': 'TextEdit', });
lyr_TempatPoint_7.set('fieldImages', {'Nama': 'TextEdit', });
lyr_Duttaphrynusmelanostictus_8.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Ingerophrynusdivergens_9.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Polypedatesleucomystax_10.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Polypedatesotilophus_11.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Microhylaberdmorei_12.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Leptolalaxgracilis_13.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Amnirananicobariensis_14.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Chalcoranachalconota_15.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Chalcoranaraniceps_16.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Odorranahosii_17.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Limnonectesfinchi_18.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Limnonecteskuhlii_19.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Fejervaryacancrivora_20.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Limnonectesibanorum_21.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Limnonectesleporinus_22.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', });
lyr_Limnonectesparamacrodon_23.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', 'Spesies': '', 'Foto': '', });
lyr_Pulchranapicturata_24.set('fieldImages', {'Habitat': 'TextEdit', 'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', 'Spesies': '', 'Foto': '', });
lyr_Ansoniaspinulifer_25.set('fieldImages', {'Status': 'TextEdit', 'Substrat': 'TextEdit', 'Famili': 'TextEdit', 'Spesies': 'TextEdit', 'Habitat': 'TextEdit', 'Foto': 'TextEdit', });
lyr_AreaPenelitian2_3.set('fieldLabels', {'Keterangan': 'no label', });
lyr_AreaPenelitian_4.set('fieldLabels', {'Keterangan': 'no label', });
lyr_AreaPenelitian4_5.set('fieldLabels', {'Keterangan': 'no label', });
lyr_AreaPenelitian3_6.set('fieldLabels', {'Keterangan': 'no label', });
lyr_TempatPoint_7.set('fieldLabels', {'Nama': 'no label', });
lyr_Duttaphrynusmelanostictus_8.set('fieldLabels', {'Habitat': 'no label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Ingerophrynusdivergens_9.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Polypedatesleucomystax_10.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Polypedatesotilophus_11.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Microhylaberdmorei_12.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Leptolalaxgracilis_13.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Amnirananicobariensis_14.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Chalcoranachalconota_15.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Chalcoranaraniceps_16.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Odorranahosii_17.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Limnonectesfinchi_18.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Limnonecteskuhlii_19.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Fejervaryacancrivora_20.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Limnonectesibanorum_21.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Limnonectesleporinus_22.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', });
lyr_Limnonectesparamacrodon_23.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', 'Spesies': 'inline label', 'Foto': 'inline label', });
lyr_Pulchranapicturata_24.set('fieldLabels', {'Habitat': 'inline label', 'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', 'Spesies': 'inline label', 'Foto': 'inline label', });
lyr_Ansoniaspinulifer_25.set('fieldLabels', {'Status': 'inline label', 'Substrat': 'inline label', 'Famili': 'inline label', 'Spesies': 'inline label', 'Habitat': 'inline label', 'Foto': 'inline label', });
lyr_Ansoniaspinulifer_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});