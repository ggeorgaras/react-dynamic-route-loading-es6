import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';

const listItems = [
  { title: 'One' },
  { title: 'Two' },
  { title: 'Three' },
  { title: 'Four' }
];

export default () => (
  <article className="women">
    <Header title="Blog" className="header-red" />
    <List items={listItems} />
  </article>
);

export const someSillyDataToMakeThisLookHeavy = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci mauris, finibus nec mattis sed, tempor sit amet nulla. Proin cursus mauris ut odio accumsan, vel ornare nulla euismod. Suspendisse consectetur tempor varius. Sed et laoreet enim. Nullam bibendum accumsan ullamcorper. Sed rutrum mattis aliquet. Donec et pulvinar justo. Morbi a neque eget mauris eleifend scelerisque.
Fusce vehicula, orci quis rutrum consectetur, tellus ex tincidunt augue, ac convallis ante neque nec ipsum. Integer euismod sem at metus elementum, ac condimentum sem iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum neque vitae nibh pretium placerat. Nulla dolor orci, ornare eu nunc ut, commodo vehicula arcu. Nulla scelerisque sem quis viverra ornare. Praesent rhoncus nisi vitae efficitur consectetur. Nulla gravida venenatis odio vel dapibus. Proin laoreet lorem mi, eget tristique leo mollis porttitor. Sed efficitur mi eu tortor tempor gravida. Morbi at rutrum purus. Curabitur viverra sagittis turpis, vitae malesuada justo semper in. In bibendum tempus mauris, sed maximus turpis. Phasellus at lacus non urna posuere aliquet. Nam nec venenatis nunc. Suspendisse eget egestas dolor.
Vivamus hendrerit cursus enim, sit amet dapibus orci vestibulum eu. In fringilla suscipit massa nec dapibus. Vestibulum tincidunt consequat sapien, a consequat elit ullamcorper id. In eleifend interdum leo eu ornare. Etiam commodo, tellus at fringilla aliquam, tellus purus fermentum nulla, in tristique est libero eu elit. Suspendisse eget arcu magna. Quisque leo orci, fringilla ut tortor interdum, condimentum maximus quam. Proin vestibulum turpis vel nibh tincidunt, quis varius nisi tempor. Quisque tortor eros, maximus eu dictum tempor, efficitur sed nisi. Duis eget mollis lorem. Nulla risus massa, pretium vitae metus at, fermentum aliquam sem. Sed semper vel enim nec viverra. Donec maximus pharetra euismod.
Aliquam blandit ullamcorper ligula in rutrum. Donec pulvinar sapien quis venenatis sodales. Pellentesque at purus quis risus efficitur lobortis ac sed tortor. Duis dignissim justo eu urna ultricies, in luctus sem interdum. Donec aliquet nisl quis posuere porttitor. Pellentesque finibus mi gravida lobortis lobortis. Ut tincidunt, metus sit amet pulvinar sollicitudin, arcu nulla varius lectus, id dictum velit ex sed tellus. Vestibulum eu tortor a mauris euismod tristique.
In bibendum massa in justo viverra ornare. Nullam blandit orci eget blandit feugiat. Aenean tincidunt quam vel vulputate elementum. Pellentesque porttitor massa in eleifend aliquet. Mauris id libero nec augue efficitur auctor. Duis lacinia rhoncus orci iaculis euismod. Nunc elementum luctus risus, vel facilisis justo mattis mattis. Aliquam blandit at mi non facilisis. Ut non bibendum dolor. Duis tempor ante vel velit auctor, non semper velit varius. Integer in massa augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec efficitur finibus sem et scelerisque. Pellentesque ipsum mauris, imperdiet ac venenatis sit amet, pellentesque facilisis felis.
In vel tempus tortor. In eu nisl vitae odio finibus ultrices. Aenean et urna consequat, lobortis leo sit amet, fringilla magna. Pellentesque lobortis ut lorem vel consectetur. Nulla imperdiet lacus vel diam suscipit, ac hendrerit orci maximus. Ut scelerisque nibh tempor ex varius facilisis. Morbi in facilisis nisi. Mauris a lacus at tortor accumsan gravida vitae sit amet felis. Praesent a ex egestas, lacinia ipsum sed, malesuada tortor. Integer sollicitudin suscipit ipsum vitae egestas.
Donec consequat nisi et mi pulvinar rutrum. Donec non libero aliquam, mollis augue non, convallis quam. Suspendisse potenti. Fusce sit amet metus ipsum. Mauris posuere porta eros, eget bibendum turpis mollis vel. Sed metus eros, varius ut elit non, tempor malesuada leo. In vulputate feugiat viverra. Praesent suscipit hendrerit erat id consequat. Sed vulputate accumsan tempus.
Fusce lorem est, volutpat sed laoreet vel, finibus quis nisl. Nam vitae lorem nibh. Nam ipsum nulla, pellentesque accumsan aliquam sit amet, volutpat ac nulla. Nunc elementum sed enim in consequat. Nam ac ipsum neque. Donec ullamcorper nulla eu erat convallis, quis iaculis urna sagittis. Etiam sed rutrum lorem. Aliquam et nulla tellus. Morbi bibendum, risus id venenatis aliquam, quam ipsum semper quam, sit amet hendrerit risus justo at eros.
In maximus nulla facilisis purus efficitur cursus. Phasellus viverra at urna vitae volutpat. Morbi massa est, suscipit vel rhoncus a, pellentesque eget elit. Morbi semper, tellus nec pulvinar laoreet, elit diam dignissim leo, in euismod velit ex vitae ante. Aliquam nec feugiat ligula. In hac habitasse platea dictumst. Pellentesque iaculis turpis ligula, non hendrerit tortor sodales sed. Aliquam ullamcorper nibh venenatis aliquet molestie. Nullam quis lectus sit amet velit molestie tristique. Integer pellentesque purus nulla, vitae ultricies leo faucibus at. Nullam eu massa quis eros imperdiet fringilla.
Aliquam ut tincidunt ipsum. Curabitur sit amet bibendum massa. Aliquam faucibus viverra risus, ut elementum turpis sodales placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin rhoncus turpis diam, et porttitor sapien eleifend nec. Maecenas faucibus, elit eu dictum mattis, nulla lacus porttitor orci, et tincidunt urna nunc blandit dolor. Etiam id tincidunt magna. Praesent tincidunt leo sed iaculis finibus. Fusce et justo facilisis, vestibulum leo sed, pretium purus. Cras lacus sapien, sodales non congue eget, tristique at enim. Etiam pulvinar et mi quis tempor.
Fusce tempor at tellus eget vestibulum. Curabitur at consectetur nulla. Aliquam nec fermentum erat. Pellentesque viverra sodales magna, et commodo nunc egestas id. Quisque sed lectus imperdiet, consectetur est in, dictum leo. In eu tortor magna. Donec faucibus diam vel turpis ultricies, nec semper velit elementum. Integer vel dolor at tellus scelerisque faucibus. Proin maximus ornare mi, vel dictum risus facilisis at. Vivamus eu turpis quis odio iaculis aliquam.
Quisque posuere ante ac elit faucibus, nec egestas magna bibendum. Pellentesque porta nulla vitae neque consequat, non dictum ex facilisis. Mauris sagittis sit amet ex condimentum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer feugiat purus et rutrum pellentesque. Vestibulum vulputate metus massa, aliquam bibendum metus dictum nec. Quisque venenatis pellentesque turpis.
Ut sit amet lorem eu tortor cursus tempor. Duis maximus purus vitae metus imperdiet, eu placerat mauris congue. In viverra tellus sit amet mauris viverra, et cursus mauris gravida. Maecenas malesuada metus iaculis, tincidunt urna ut, tempor nisi. Phasellus sed nulla vel justo efficitur vehicula ullamcorper et est. Mauris sed dictum neque. Nam molestie dignissim nisl, id gravida felis semper sit amet. Cras ullamcorper condimentum neque vitae sodales. Vestibulum et lacus tincidunt, ullamcorper arcu et, pulvinar ex. Phasellus in tellus in lorem feugiat placerat sit amet et orci.Donec id nibh nec augue accumsan egestas. Quisque leo ex, consequat sed augue sit amet, ullamcorper vulputate nisl. Praesent at sem ac sem condimentum porta quis quis ex. Ut mattis consequat tempor. Vivamus vel tortor nisi. Sed maximus porttitor purus ac congue. Vestibulum ex magna, sollicitudin nec ante in, consectetur pretium mi. Integer egestas placerat convallis.Suspendisse fermentum scelerisque rhoncus. Aliquam maximus mattis turpis in dignissim. Nullam accumsan mollis lacus a consequat. Nulla tempor dolor eu metus lobortis varius. Duis interdum lectus sed diam vehicula mattis. Suspendisse potenti. Curabitur lobortis, orci ut ullamcorper lobortis, ante sapien ultricies orci, eget porta urna orci at dui. Etiam in faucibus metus. Nunc consectetur tellus in nulla imperdiet, a lacinia sem porta. Fusce aliquam leo quis arcu bibendum eleifend. Aliquam luctus, nisi sit amet molestie varius, eros tellus fringilla dui, et bibendum neque quam quis nunc. Quisque id ornare leo. Donec finibus fermentum nisi quis laoreet. Morbi suscipit gravida diam, eget cursus dui euismod eget. Morbi quis tristique orci, vitae varius libero.Sed sapien dolor, elementum id erat eget, tempor vehicula lacus. Curabitur vehicula sodales enim a laoreet. Morbi semper lobortis pulvinar. Nulla sollicitudin mauris non neque bibendum, eu tincidunt neque semper. Nam porttitor placerat erat sed dictum. Nunc scelerisque velit sed dui vehicula malesuada. Curabitur pharetra a magna et tempus. Pellentesque sollicitudin pulvinar nisi, et mattis augue tincidunt vitae. Nulla sem sapien, imperdiet quis rutrum id, vulputate vitae arcu. Donec interdum porttitor sapien, vel finibus quam facilisis eget. Quisque viverra aliquam nulla in semper. In hac habitasse platea dictumst. Mauris vitae ipsum quis metus laoreet tincidunt. Phasellus erat eros, dignissim vitae mattis ut, ullamcorper at lacus. Nullam fermentum rutrum lorem, a laoreet sapien placerat et. Nullam fermentum est at dignissim maximus.Pellentesque hendrerit tristique nisl a accumsan. Morbi nec laoreet dolor, nec bibendum leo. Ut molestie sem luctus est malesuada, vel dictum dolor posuere. Fusce nisl nulla, fermentum quis augue vel, auctor finibus augue. Integer tempor urna a ullamcorper rhoncus. Pellentesque tristique mi libero, id congue lacus gravida id. In eu risus a magna facilisis viverra. Mauris euismod odio at orci faucibus luctus. Donec sit amet molestie ex, et aliquet ligula. Vivamus et nibh ut quam pulvinar feugiat ut quis augue. Integer tempus a lectus quis sagittis. Duis fringilla venenatis sem, ac venenatis eros varius a. Pellentesque ornare nisi ac lacus sodales cursus.Sed vitae iaculis quam, et placerat leo. Nulla placerat massa vitae turpis scelerisque accumsan. Sed sodales tortor mi, sed feugiat tortor venenatis in. Sed neque dolor, rutrum quis libero eu, cursus sollicitudin quam. Duis non est ultricies mauris gravida fermentum ut sit amet mi. Morbi quis tellus et tortor molestie mattis ac vel orci. Pellentesque maximus sed felis at accumsan. Praesent accumsan tincidunt tempor. Nam auctor ligula nec consequat consectetur.Nullam in ante a ligula tempor rhoncus tristique pellentesque augue. Suspendisse blandit sodales massa faucibus dignissim. Duis vel erat sed nisl feugiat semper. Etiam pellentesque nulla nisl, non ultrices turpis condimentum sed. Maecenas dignissim, lacus ut tempus rhoncus, sem augue tincidunt dui, a aliquet metus lectus ac sapien. Nullam bibendum risus ac risus aliquam accumsan. Aliquam cursus elit sem, id finibus sapien feugiat sit amet. Quisque porttitor mauris nec ipsum imperdiet, ut porta lorem faucibus. Maecenas posuere massa ex, nec fermentum dolor semper at.Aliquam placerat pharetra magna, eu porttitor arcu. Mauris hendrerit felis nec dolor porta viverra. Nullam ligula felis, auctor nec elementum sit amet, iaculis nec dolor. Donec sodales massa ut enim placerat, ut ullamcorper purus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque enim sem, porta at hendrerit et, ornare id ex. Duis non dignissim erat. Curabitur urna felis, tincidunt in ultrices eget, semper vel mauris. Donec in nibh eget ipsum convallis rutrum. Nulla consectetur, risus eget accumsan accumsan, orci arcu euismod urna, vitae gravida eros urna non ex.Quisque orci ipsum, congue id nisl a, tincidunt consequat arcu. Donec viverra, nisl sed imperdiet cursus, diam quam egestas sem, at condimentum nisi massa sed augue. Mauris hendrerit vitae ligula vel hendrerit. Aliquam ut elementum erat, non volutpat justo. Quisque venenatis hendrerit neque eu varius. Curabitur non condimentum ipsum. Fusce viverra consectetur varius. Morbi vehicula vulputate lorem id pellentesque.Duis luctus lorem ac auctor mollis. Maecenas varius consequat urna a vehicula. Morbi quis auctor magna. Proin vestibulum tempus pulvinar. Aliquam sit amet mauris felis. Mauris lectus neque, dapibus sit amet auctor ac, congue vitae libero. Nulla ligula neque, suscipit eget tincidunt consequat, feugiat quis lacus. Maecenas aliquet consectetur neque, sed rutrum augue auctor nec. In ante justo, suscipit convallis porta venenatis, iaculis eu eros.
Proin ut consequat erat, quis iaculis urna. Etiam auctor nisl a augue congue, eu venenatis urna eleifend. Quisque ligula elit, malesuada et condimentum eget, lobortis accumsan quam. Fusce tincidunt lorem sapien, nec malesuada est tristique ac. Nunc et dolor sit amet quam placerat convallis sit amet vel justo. Pellentesque pharetra pretium congue. Proin at dapibus turpis, nec tristique nisl. Suspendisse potenti. Donec quis felis convallis, rhoncus libero sed, dictum est.`;
