var scribble = require('scribbletune');
var clip_bass0 = scribble.clip({
    notes: 'c2 e2 c2 d2 e2 g2 c2 d2 c2 b1',
    pattern: 'x_______________x_______________x_____________x_x_____________x_x___________xx_x________________',
    noteLength: '1/4'
});

scribble.midi(clip_bass0, 'basst0.mid');

var clip_bass1 = scribble.clip({
    notes: 'c2 e2 c2 d2 e2 g2',
    pattern: 'x_______x_______x______xx______x',
    noteLength: '1/2'
});

scribble.midi(clip_bass1, 'basst1.mid');

var clip_arpegiost0 = scribble.clip({
    notes: 'c2 e2 g2 b2 c3 b2 g2 e2',
    pattern: 'x-'.repeat(8),
    arpegiate: true
});

scribble.midi(clip_arpegiost0, 'arpegiost0.mid');

var clip_chordst = scribble.clip({
    notes: 'Emin, Cmaj',
    pattern: 'x___x___',
    noteLength: '2/2',
    sizzle: true
});

scribble.midi(clip_chordst, 'chordst.mid');

var clip_drumst = scribble.clip({
    notes: 'c2',
    pattern: 'x-x-----'.repeat(4),
});

scribble.midi(clip_drumst, 'drumst.mid');

var clip_sythst0 = scribble.clip({
    notes: 'b4 c5 d5 c5 b4',
    pattern: 'x_______________x_______________________--------x_----x_----x_______',
});

scribble.midi(clip_sythst0, 'sythst0.mid');