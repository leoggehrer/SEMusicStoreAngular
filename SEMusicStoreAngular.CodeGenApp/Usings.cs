//@CodeCopy
#if IDINT_ON
global using IdType = System.Int32;
#elif IDLONG_ON
    global using IdType = System.Int64;
#elif IDGUID_ON
    global using IdType = System.Guid;
#else
global using IdType = System.Int32;
#endif
global using Common = SEMusicStoreAngular.Common;
global using CommonModules = SEMusicStoreAngular.Common.Modules;
global using SEMusicStoreAngular.Common.Extensions;
global using CommonStaticLiterals = SEMusicStoreAngular.Common.StaticLiterals;
global using TemplatePath = SEMusicStoreAngular.Common.Modules.Template.TemplatePath;
