"strings" folder contains license plate number for each image in the "images" folder.

"annotations_yolo" folder contains annotations in YOLO format. YOLO networks can be directly trained using these annotations.

"annotations" folder contains annotations in the following format:
- First line contains the number of objects in an image.
- Remaining lines contain the bounding box coordinates along with the class id in the following format:

top_left x, top_left y, bottom_right x, bottom_right y, class id

class id repesent each class in the following way:
{
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': 'Ga (가)',
    '11': 'Na (나)',
    '12': 'Da (다)',
    '13': 'Ra (라)',
    '14': 'Ma (마)',
    '15': 'Geo (거)',
    '16': 'Neo (너)',
    '17': 'Deo (더)',
    '18': 'Reo (러)',
    '19': 'Meo (머)',
    '20': 'Beo (버)',
    '21': 'Seo (서)',
    '22': 'Eo (어)',
    '23': 'jeo (저)',
    '24': 'Go (고)',
    '25': 'No (노)',
    '26': 'Do (도)',
    '27': 'Ro (로)',
    '28': 'Mo (모)',
    '29': 'Bo (보)',
    '30': 'So (소)',
    '31': 'O (오)',
    '32': 'Jo (조)',
    '33': 'Gu (구)',
    '34': 'Nu (누)',
    '35': 'Du (두)',
    '36': 'Ru (루)',
    '37': 'Mu (무)',
    '38': 'Bu (부)',
    '39': 'Su (수)',
    '40': 'U (우)',
    '41': 'Ju (주)',
    '42': 'Heo (허)',
    '43': 'Ha (하)',
    '44': 'Ho (호)'
}
